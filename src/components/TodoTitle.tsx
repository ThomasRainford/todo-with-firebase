import React from 'react'
import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
    TodoTitle: {
        flexGrow: 1,
    },
}));

interface Props {
    title: string
}

const TodoTitle: React.FC<Props> = (props: Props) => {
    const classes = useStyles()

    return (
        <div className={classes.TodoTitle}>
            <p>{props.title}</p>
        </div>
    )
}

export default TodoTitle