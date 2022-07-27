import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import List from "@mui/material/List";
import { ListItem } from "@mui/material";

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
    <List sx={{ width: '100%', maxWidth: 360 }}>
      {users.map((user) => (
        <ListItem key={user.id}>{user.name}</ListItem>
      ))}
    </List>
  );
};

export default App;