import React, { useEffect } from 'react'
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
    todosFolder: firebase.firestore.DocumentData
}

const TodoList: React.FC<Props> = ({ todosFolder }) => {
    const classes = useStyles()

    useEffect(() => {
        console.log(todosFolder)
    }, [])

    return (
        <div className={classes.TodoList}>
            <List>
                {todosFolder &&
                    todosFolder.todo.todos.map((todo: firebase.firestore.DocumentData) => (
                        <TodoItem key={Math.random()} text={todo} />
                    ))
                }
            </List>
        </div>
    )
}

export default TodoList