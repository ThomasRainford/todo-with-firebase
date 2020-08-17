import React from 'react'
import { List, Theme, makeStyles } from '@material-ui/core'
import TodoItem from './TodoItem'

const useStyles = makeStyles((theme: Theme) => ({
    TodoList: {
        flexGrow: 1,
    },
}))

interface Todo {
    text: string
}

interface Props {
    todos: firebase.firestore.DocumentData[]
}

const TodoList: React.FC<Props> = ({todos}) => {
    const classes = useStyles()

    return (
        <div className={classes.TodoList}>
            <List>
                {todos &&
                    todos.map((todo: firebase.firestore.DocumentData) => (
                        <TodoItem key={todo.text} text={todo.text} />
                    ))
                }
            </List>
        </div>
    )
}

export default TodoList