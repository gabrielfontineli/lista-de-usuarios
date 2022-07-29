import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Home } from '@mui/icons-material';
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Grid } from '@mui/material';
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';

export default function ButtonAppBar(props: any) {
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
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}