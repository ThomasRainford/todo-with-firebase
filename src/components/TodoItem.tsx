import React, { useState, useEffect } from 'react'
import { ListItem, ListItemText, makeStyles, Theme, Divider, ListItemIcon, IconButton, Checkbox } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import firebase from 'firebase';
import { db } from '../firebase';
import EditTodoForm from './EditTodoForm';

const useStyles = makeStyles((theme: Theme) => ({
    TodoItem: {
        flexGrow: 1,
        //backgroundColor: '#CBB9B6',
    },
    editIcon: {
        paddingRight: '2%'
    },
    removeIcon: {
        paddingLeft: '2%'
    },
}))

interface Todo {
    text: string
}

interface Props {
    text: firebase.firestore.DocumentData
    currentTodo: firebase.firestore.DocumentData,
    index: number
}

const TodoItem: React.FC<Props> = ({ text, currentTodo, index }) => {
    const classes = useStyles()

    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [isChecked, setIsChecked] = useState<boolean>(false)

    useEffect(() => {
        setIsEditing(false) // when todo is edited, this will be called.
    }, [])

    const handleCheckbox = () => {
        setIsChecked(!isChecked)
    }

    const setTodoText = () => {
        if(isChecked) {
            return <ListItemText primary={<s>{text}</s>}/>
        } else {
            return <ListItemText primary={text} />
        }                                                                               
    } 

    const handleEdit = () => {
        setIsEditing(!isEditing)
    }

    const handleRemove = () => {
        db.collection('todos').doc(currentTodo.id).update({
            todos: firebase.firestore.FieldValue.arrayRemove(text)
        });
    }

    const handleTodoEdit = (values: Todo) => {
        const newTodosArray = currentTodo.todo.todos
        newTodosArray[index] = values.text

        db.collection('todos').doc(currentTodo.id).update({
            todos: newTodosArray
        })
    }

    return (
        <div className={classes.TodoItem}>
            <ListItem>
                <Checkbox
                    style={{marginRight: '1%'}}
                    checked={isChecked}
                    onChange={handleCheckbox}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />

                {!isEditing ? setTodoText()
                    : <EditTodoForm todoText={text.toString()} onSubmit={handleTodoEdit} />
                }

                <div className={classes.editIcon} >
                    <IconButton size="small" onClick={handleEdit}>
                        <EditIcon fontSize="small" color="primary" />
                    </IconButton>
                </div>
                <div className={classes.removeIcon}>
                    <IconButton size="small" onClick={handleRemove} >
                        <DeleteIcon fontSize="small" color="error" />
                    </IconButton>
                </div>
            </ListItem>
            <Divider />
        </div>
    )
}

export default TodoItem