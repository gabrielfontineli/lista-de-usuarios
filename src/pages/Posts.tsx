import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostList from "../components/UserPosts";
import AppBar  from "../components/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";

const Posts = () => {
	let params = useParams();

	const [posts, setPosts] = useState([
		{ userId: 1, id: 1, title: "", body: "" },
		{ userId: 1, id: 2, title: "", body: "" },
	]);
  	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/posts`)
			.then((response) => response.json())
			.then((json) => {setPosts(json); setLoading(false)});
	});
	return (
		<Box className="Posts">
			<AppBar userId={params.userId} pagina="posts" />
			<Box className="card" sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
				{loading ? <Typography variant='h5'>Carregando...</Typography> : null}
				<PostList posts={posts}/>
			</Box>

		</Box>
	);
};

export default Posts;