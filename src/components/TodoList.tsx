import React from 'react'
import { List, Theme, makeStyles } from '@material-ui/core'
import TodoItem from './TodoItem'

const useStyles = makeStyles((theme: Theme) => ({
    TodoList: {
        flexGrow: 1,
    },
}))

const TodoList: React.FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.TodoList}>
            <List>
                <TodoItem todo="todo 1"/>
                <TodoItem todo="todo 2"/>
                <TodoItem todo="todo 3"/>
            </List>
        </div>
    )
}

export default TodoList