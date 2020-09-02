import React, { useState } from 'react'
import { makeStyles, Theme, Button, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import NewTodoFrom from './NewTodoForm';
import { db } from '../firebase';
import firebase from 'firebase';
import useFirebaseFirestorePush from '../hooks/useFirebaseFirestorePush'

const useStyles = makeStyles((theme: Theme) => ({
    NewTodo: {
        flexGrow: 1,
    },
    openAddTodo: {
        display: 'inline'
    },
    addTodoInput: {
        display: 'inline-flex',
        width: '100%'
    }
}));

interface Todo {
    text: string
}

interface Props {
    currentTodo: firebase.firestore.DocumentData
}

const NewTodo: React.FC<Props> = ({ currentTodo }) => {
    const classes = useStyles()

    const [displayInput, setDisplayInput] = useState<boolean>(false)

    const doAddTodo = () => { setDisplayInput(true) }
    const doNotAddTodo = () => { setDisplayInput(false) }

    const [ pushTodos ] = useFirebaseFirestorePush(currentTodo)

    // const handleTodoUpload = (values: Todo) => {
    //     db.collection('todos').doc(currentTodo.id).update({
    //         todos: firebase.firestore.FieldValue.arrayUnion(values.text)
    //     });
    // }

    return (
        <div className={classes.NewTodo}>
            <div className={classes.openAddTodo}>
                {!displayInput ?
                    <Fab onClick={doAddTodo} variant="extended"><AddIcon fontSize="large" color="primary" />Add Todo</Fab>
                    : <Fab onClick={doNotAddTodo} variant="extended"><RemoveIcon fontSize="large" color="primary" />Close</Fab>
                }
            </div>
            <div className={classes.addTodoInput}>
                {displayInput &&
                    <NewTodoFrom onSubmit={(values) => {
                        pushTodos(values)
                    }} />
                }
            </div>
        </div>
    )
}

export default NewTodo