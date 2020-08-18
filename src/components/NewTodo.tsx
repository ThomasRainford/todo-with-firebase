import React, { useState } from 'react'
import { makeStyles, Theme, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import NewTodoFrom from './NewTodoForm';
import { db } from '../firebase';
import firebase from 'firebase';

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

    const handleTodoUpload = (values: Todo) => {
        db.collection('todos').doc(currentTodo.id).update({
            todos: firebase.firestore.FieldValue.arrayUnion(values.text)
        });
    }

    return (
        <div className={classes.NewTodo}>
            <div className={classes.openAddTodo}>
                {!displayInput ?
                    <Button onClick={doAddTodo}><AddIcon fontSize="large" color="primary" /></Button>
                    : <Button onClick={doNotAddTodo}><RemoveIcon fontSize="large" color="primary" /></Button>
                }
            </div>
            <div className={classes.addTodoInput}>
                {displayInput &&
                    <NewTodoFrom onSubmit={(values) => {
                        handleTodoUpload(values)
                    }} />
                }
            </div>
        </div>
    )
}

export default NewTodo