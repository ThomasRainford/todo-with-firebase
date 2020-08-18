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
    const doNotAddTodo = () => { setDisplayInput(false) }

    const handleTodoUpload = (values: Todo) => {
        db.collection('todos').doc(currentTodo.id).update( {
            todos: firebase.firestore.FieldValue.arrayUnion(values.text)
         });
    }

    return (
        <div className={classes.NewTodo}>
            {!displayInput ?
                <Button><AddIcon fontSize="large" color="primary" onClick={doAddTodo} /></Button>
                : <Button><RemoveIcon fontSize="large" color="primary" onClick={doNotAddTodo} /></Button>
            }
            
            {displayInput &&
                <NewTodoFrom onSubmit={(values) => {
                    handleTodoUpload(values)
                }} />
            }
        </div>
    )
}

export default NewTodo