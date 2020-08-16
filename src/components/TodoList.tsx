import React, { useState } from 'react'
import { List, Theme, makeStyles } from '@material-ui/core'
import TodoItem from './TodoItem'

const useStyles = makeStyles((theme: Theme) => ({
    TodoList: {
        flexGrow: 1,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
}))

interface Props {
    todos: any
}

const TodoList: React.FC<Props> = ({todos}) => {
    const classes = useStyles()

    return (
        <div className={classes.TodoList}>
            <List>
                {todos &&
                    todos.map((todo: any) => (
                        <TodoItem todo={todo.text} />
                    ))
                }
            </List>
        </div>
    )
}

export default TodoList