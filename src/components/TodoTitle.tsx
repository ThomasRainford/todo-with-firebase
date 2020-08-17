import React from 'react'
import { makeStyles, Theme, Typography } from '@material-ui/core'

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
            <Typography variant="h5">
                {props.title}
            </Typography>
        </div>
    )
}

export default TodoTitle