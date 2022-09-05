import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Home } from '@mui/icons-material';
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Button, Grid } from '@mui/material';
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import { useAuth } from "../hooks/useAuth"

export default function ButtonAppBar(props: any) {
  const { user, logout } = useAuth()
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">

          <Toolbar>
            <Grid container justifyContent="space-between" alignContent="center">
              <Grid item>

                <Link to="/" color="inherit">

                  <IconButton
                    size="large"
                    edge="start"
                    color="secondary"
                    aria-label="home"
                    sx={{ mr: 2 }}
                  >
                    <Home />
                  </IconButton>
                </Link>
              </Grid>

              <Grid item>
                <Typography
                  alignSelf="center"
                  sx={{ mt: 1 }}
                >
                  {(props.pagina == "tasks") ? "Tarefas" : "Posts"}

                </Typography>
              </Grid>

              <Grid item>

                <Link to={(props.pagina == "tasks") ? `/posts/${props.userId}` : `/tasks/${props.userId}`} color="inherit">

                  <IconButton
                    size="large"
                    edge="start"
                    color="secondary"
                    aria-label="posts"
                    sx={{ mr: 2 }}
                  >
                    {(props.pagina == "tasks") ? <CommentIcon /> : <AssignmentIcon />}
                  </IconButton>
                </Link>
              </Grid>

            </Grid>
            {user && (
				<Box 
					sx={{
						marginRight: '10px',
					}}
				>
					<Typography textAlign='end'>
						Logado como {user?.name} | 
							<Button 
								variant='text'
								sx={{
									marginLeft: '5px',
									marginBottom: '3px'
								}}
								onClick={logout}
							>
								Deslogar
							</Button>
					</Typography>
				</Box>
			)}

          </Toolbar>
          
        </Container>
      </AppBar>
    </Box>
  );
}