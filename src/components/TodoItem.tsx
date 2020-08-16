import React from 'react'
import { ListItem, ListItemText, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
    TodoItem: {
        flexGrow: 1,
    },
}))

interface Props {
    todo: string
}

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