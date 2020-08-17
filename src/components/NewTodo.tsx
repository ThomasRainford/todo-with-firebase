import React, { useState } from 'react'
import { makeStyles, Theme } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import NewTodoFrom from './NewTodoForm';
import { db } from '../firebase';
import firebase from 'firebase';

const useStyles = makeStyles((theme: Theme) => ({
    NewTodo: {
        flexGrow: 1,
        paddingTop: '1%',
        paddingLeft: '1%'
    },
}));

interface Todo {
    text: string
}

interface Todos {
    title: string,
    todos: Todo[]
}

interface Props {
    currentTodo: firebase.firestore.DocumentData
}

const NewTodo: React.FC<Props> = ({ currentTodo }) => {
    const classes = useStyles()

    const [displayInput, setDisplayInput] = useState<boolean>(false)

    const doAddTodo = () => { setDisplayInput(true) }

    const handleTodoUpload = () => {
        db.collection('todos').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            title: currentTodo.title,
            todos: currentTodo.todos
        })
    }

    return (
        <div className={classes.NewTodo}>
            <AddIcon fontSize="large" color="primary" onClick={doAddTodo} />
            {displayInput &&
                <NewTodoFrom onSubmit={(values) => {
                    handleTodoUpload()
                }} />
            }
        </div>
    )
}

export default NewTodo