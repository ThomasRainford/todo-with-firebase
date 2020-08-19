import React from 'react'
import { ListItem, ListItemText, makeStyles, Theme, Divider, ListItemIcon, Button } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DeleteIcon from '@material-ui/icons/Delete';
import firebase from 'firebase';
import { db } from '../firebase';

const useStyles = makeStyles((theme: Theme) => ({
    TodoItem: {
        flexGrow: 1,
    },
}))

interface Props {
    text: firebase.firestore.DocumentData
    currentTodo: firebase.firestore.DocumentData
}

const TodoItem: React.FC<Props> = ({ text, currentTodo }) => {
    const classes = useStyles()

    const handleRemove = () => {
        db.collection('todos').doc(currentTodo.id).update({
            todos: firebase.firestore.FieldValue.arrayRemove(text)
        });
    }

    return (
        <div className={classes.TodoItem}>
            <ListItem>
                <ListItemIcon>
                    <ArrowForwardIosIcon fontSize="small" color="primary" />
                </ListItemIcon>
                <ListItemText primary={text}></ListItemText>
                <ListItemIcon>
                    <Button size="small" onClick={handleRemove}><DeleteIcon fontSize="small" color="error" /></Button>
                </ListItemIcon>
            </ListItem>
            <Divider />
        </div>
    )
}

export default TodoItem