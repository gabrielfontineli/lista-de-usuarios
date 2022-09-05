import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "../App.css";
import { Box, Container, IconButton, ListItem, Button, Grid} from "@mui/material";
import UserList from "../components/UserList";
import AppBar from "../components/AppBar";
import { Height } from "@mui/icons-material";
import { useParams } from "react-router-dom";


const AppLoginLogoutButton = (props: any) => {
	if (!props.login()) {
	  return (
			<Grid padding={5} container direction="row" justifyContent="space-between">
				<Grid item>
					<Button variant="contained" href="/login">Login</Button>

				</Grid>

				<Grid item>
					<Button variant="contained" href="/cadastro">Cadastro</Button>
					
				</Grid>
			</Grid>

	  );
	} else {
		return (
		  <Button
			variant="contained"
			onClick={() => props.onLogout()}
		  >
			Logout
		  </Button>
		);
	}
};

const App = (props: any) => {
  const params = useParams();
  const [users, setUsers] = useState([
    { id: 0, name: "" }
  ]);
  const [loading, setLoading] = useState(true);
  const [sessionId, setSessionId] = useState(params.hash ?? "");
	const isUserLogged = () => (sessionId ? true : false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((json) => { setUsers(json); setLoading(false) });
  }, []);
  return (
    <Box sx={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>

      <Box className="App" >
      <AppLoginLogoutButton login={isUserLogged} onLogout={() => setSessionId("")} />
        <UserList users={users} />
      </Box>
    </Box>

  );
};

export default App;