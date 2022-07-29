import * as React from 'react';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import { grey } from '@mui/material/colors';

export default function UserList(props: any) {
    return (
        <List sx={{ width: '100%', maxWidth: 360, padding:5,bgcolor: grey}}>
            {props.users.map((user:any) => (
                <ListItem
                    key={user.id}
                    disableGutters
                    secondaryAction={
                        <Link to={`/posts/${user.id}`}>
                            <IconButton aria-label="comment">
                                <CommentIcon color="secondary" />
                            </IconButton>
                        </Link>
                    }
                >
                    <Link to={`/tasks/${user.id}`}>
                        <ListItemText primary={user.name} />
                    </Link>
                </ListItem>
            ))}
        </List>
    );
}