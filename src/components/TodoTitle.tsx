import React from 'react'
import { makeStyles, Theme, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
    TodoTitle: {
        flexGrow: 1,
        textAlign: 'center',
    },
}));

interface Props {
    todo: firebase.firestore.DocumentData
}

const TodoTitle: React.FC<Props> = ({ todo }) => {
    const classes = useStyles()

    return (
        <div className={classes.TodoTitle}>
            <Typography variant="h5">
                {todo.title}
            </Typography>
        </div>
    )
}

export default TodoTitle