import React from 'react'
import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
    TodoTitle: {
        flexGrow: 1,
        textAlign: 'center',
    },
}));

interface Props {
    title: string
}

const TodoTitle: React.FC<Props> = (props: Props) => {
    const classes = useStyles()

    return (
        <div className={classes.TodoTitle}>
            <h3>{props.title}</h3>
        </div>
    )
}

export default TodoTitle