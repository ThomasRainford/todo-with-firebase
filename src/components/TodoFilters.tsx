import React, { useState } from 'react'
import { makeStyles, Theme, Button, List } from '@material-ui/core'
import TodoItem from './TodoItem'

const useStyles = makeStyles((theme: Theme) => ({
    TodoFilters: {
        flexGrow: 1
    },
    allButton: {
        margin: theme.spacing(1)
    },
    activeButton: {
        margin: theme.spacing(1)
    },
    completedButton: {
        margin: theme.spacing(1)
    }
}))

interface Props {
    todosFolder: firebase.firestore.DocumentData
}

const TodoFilters: React.FC<Props> = ({ todosFolder }) => {
    const classes = useStyles()

    const allTodos = (): firebase.firestore.DocumentData[] => {
        return todosFolder.todo.todos
    }

    const activeTodos = (): firebase.firestore.DocumentData[] => {
        let index: number = 0
        return todosFolder.todo.todos.filter(() => {
            return !todosFolder.todo.completed[index++]
        })
    }

    const completedTodos = (): firebase.firestore.DocumentData[] => {
        let index: number = 0
        return todosFolder.todo.todos.filter(() => {
            return todosFolder.todo.completed[index++]
        })
    }

    const [filteredTodos, setFilteredTodos] = useState<firebase.firestore.DocumentData[]>(allTodos())

    return (
        <div className={classes.TodoFilters}>
            <Button onClick={() => { setFilteredTodos(allTodos()) }} className={classes.allButton} variant="contained" color="primary">All</Button>
            <Button onClick={() => { setFilteredTodos(activeTodos()) }} className={classes.activeButton} variant="contained" color="primary">Active</Button>
            <Button onClick={() => { setFilteredTodos(completedTodos()) }} className={classes.completedButton} variant="contained" color="primary">Completed</Button>

            <List>
                {todosFolder &&
                    filteredTodos.map((todo: firebase.firestore.DocumentData) => (
                        <TodoItem key={Math.random()} text={todo} currentTodos={todosFolder} index={todosFolder.todo.todos.indexOf(todo)} />
                    ))
                }
            </List>
        </div>
    )
}

export default TodoFilters