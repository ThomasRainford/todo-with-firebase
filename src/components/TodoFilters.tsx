import React from 'react'
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
        return todosFolder.todo.completed.filter((completed: firebase.firestore.DocumentData) => {
            return completed
        })
    }

    const completedTodos = (): firebase.firestore.DocumentData[] => {
        return todosFolder.todo.completed.filter((completed: firebase.firestore.DocumentData) => {
            return !completed
        })
    }

    return (
        <div className={classes.TodoFilters}>
            <Button className={classes.allButton} variant="contained" color="primary">All</Button>
            <Button className={classes.activeButton} variant="contained" color="primary">Active</Button>
            <Button className={classes.completedButton} variant="contained" color="primary">Completed</Button>

            <List>
                {todosFolder &&
                    todosFolder.todo.todos.map((todo: firebase.firestore.DocumentData) => (
                        <TodoItem key={Math.random()} text={todo} currentTodos={todosFolder} index={todosFolder.todo.todos.indexOf(todo)} />
                    ))
                }
            </List>
        </div>
    )
}

export default TodoFilters