import React from 'react'
import { ListItem, ListItemText, makeStyles, Theme } from '@material-ui/core'
import classes from '*.module.css'

interface Props {
    todo: string
}

const useStyles = makeStyles((theme: Theme) => ({
    TodoItem: {
        flexGrow: 1,
    },
}))

const TodoItem: React.FC<Props> = (props: Props) => {
    const classes = useStyles()

    return (
        <div className={classes.TodoItem}>
            <ListItem>
                <ListItemText primary={props.todo}></ListItemText>
            </ListItem>
        </div>
    )
}

export default TodoItem