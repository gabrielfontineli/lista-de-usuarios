import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "../App.css";
import { Box, Container, IconButton, ListItem } from "@mui/material";
import UserList from "../components/UserList";
import AppBar from "../components/AppBar";
import { Height } from "@mui/icons-material";


const App = (props: any) => {
  const [users, setUsers] = useState([
    { id: 1, name: "" },
    { id: 2, name: "" },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((json) => { setUsers(json); setLoading(false) });
  }, []);
  return (
    <Box sx={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>

      <Box className="App" >
        <UserList users={users} />
      </Box>
    </Box>

  );
};

export default App;