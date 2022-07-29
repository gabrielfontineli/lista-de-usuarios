import { useState, useEffect } from "react";
import TasksList from "../components/TasksList";
import { useParams } from "react-router-dom";
import AppBar from "../components/AppBar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { Box} from "@mui/material"

const Tasks = () => {
	let params = useParams();

	const [tasks, setTasks] = useState([
		{ id: 1, title: "", completed: false },
		{ id: 2, title: "", completed: true },
	]);
  	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/todos`)
			.then((response) => response.json())
			.then((json) => {setTasks(json); setLoading(false); console.log(params.userId)});
	});
	return (
		<Box className="Tasks">
			<AppBar userId={params.userId} pagina="tasks" />
			<Box className="card" sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
				{loading ? <Typography variant='h5'>Carregando...</Typography> : null}				
                <TasksList tasks={tasks} />
				
			</Box>

		</Box>
 	);
};

export default Tasks;