import React, { useState } from 'react'
import { makeStyles, Theme, Typography, Icon } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme: Theme) => ({
    TodoTitle: {
        flexGrow: 1,
        textAlign: 'center',
    },
}));

interface Props {
    todosFolder: firebase.firestore.DocumentData
}

const TodoTitle: React.FC<Props> = ({ todosFolder }) => {
    const classes = useStyles()

    const [isEditing, setIsEditing] = useState<boolean>(false)

    const handleTitleEdit = () => {
        setIsEditing(true)
    }

    return (
        <div className={classes.TodoTitle}>
            {!isEditing ?
                <Typography variant="h5" color="inherit" display="inline" onClick={handleTitleEdit}>
                    {todosFolder.todo.title}
                </Typography>
                : <input></input>
            }
        </div>
    )
}

export default TodoTitle