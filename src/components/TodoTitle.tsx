import React, { useState } from 'react'
import { makeStyles, Theme, Typography } from '@material-ui/core'
import EditTitleForm from './EditTitleForm';
import { db } from '../firebase';

const useStyles = makeStyles((theme: Theme) => ({
    TodoTitle: {
        flexGrow: 1,
        textAlign: 'center',
    },
}));

interface Todo {
    text: string
}

interface Props {
    todosFolder: firebase.firestore.DocumentData
}

const TodoTitle: React.FC<Props> = ({ todosFolder }) => {
    const classes = useStyles()

    const [isEditing, setIsEditing] = useState<boolean>(false)

    const handleEdit = () => {
        setIsEditing(!isEditing)
    }

    const handleTitileEdit = (values: Todo) => {
        db.collection('todos').doc(todosFolder.id).update({
            title: values.text
        }).then(() => {
            setIsEditing(false)
        })
    }

    return (
        <div className={classes.TodoTitle}>
            {!isEditing ?
                <Typography variant="h5" color="inherit" display="inline" onClick={handleEdit}>
                    {todosFolder.todo.title}
                </Typography>
                : <EditTitleForm todoTitle={todosFolder.todo.title} onSubmit={handleTitileEdit}/>
            }
        </div>
    )
}

export default TodoTitle