import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Comments from './Comments';


export default function PostList(props: any) {
  return (
    <List sx={{ width: '100%', maxWidth: 360 }}>
      {props.posts.map((post: any) => (
        <>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={post.userId} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            
            <ListItemText
              primary={post.title}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="gray"
                  >
                    {post.body}
                  </Typography>
                  <Comments post={post.id} />

                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />

        </>

      ))}
    </List>
  );
}