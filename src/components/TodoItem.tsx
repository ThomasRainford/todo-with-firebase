import React from 'react'
import { ListItem, ListItemText, makeStyles, Theme, Divider, ListItemIcon } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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
                <ListItemIcon>
                    <ArrowForwardIosIcon fontSize="small" color="primary"/>
                </ListItemIcon>
                <ListItemText primary={props.todo}></ListItemText>
            </ListItem>
            <Divider />
        </div>
    )
}

export default TodoItem