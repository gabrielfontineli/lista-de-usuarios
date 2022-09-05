import { useState } from "react";
import { 
	Box, 
	Button, 
	Card, 
	InputAdornment, 
	TextField, 
	Typography 
} from '@mui/material';
import ButtonAppBar  from "../components/AppBar";
import { AuthUser } from "../context/AuthContext";
//import { BiLogIn } from 'react-icons/bi'
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const Login = (props: any) => {
	const { login, isAuthenticated } = useAuth()
	const [loginData, setLoginData] = useState<AuthUser>({ name: '' })
	const navigate = useNavigate()

	return (
		<Box
			sx={{
				width: '100vw',
				minHeight: '100vh'
			}}
		>
			<ButtonAppBar />

			<Box
				sx={{
					width: '100vw',
					height: '100%',
					display: "flex",
					justifyContent: 'center',
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<Card
					sx={{
						minWidth: '300px',
						minHeight: '100px',
						padding: '15px',
					}}
				>
					<Typography sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '15px' }}>Login</Typography>
					<Box>
						<TextField
							fullWidth
							sx={{ outlineColor: 'black' }}
							label='Nome'
							placeholder='Insira seu nome...'
							value={loginData.name}
							onChange={(e) => setLoginData(prev => ({ ...prev, name: e.target.value }))}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										
									</InputAdornment>
								),
							}}
						/>
						<Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
							<Button 
								variant='contained'
								onClick={() => login(loginData)}
							>
								Login
							</Button>
						</Box>
					</Box>
				</Card>
			</Box>
		</Box>
	);
};

export default Login