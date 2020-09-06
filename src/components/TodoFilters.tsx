import React, { useState, ReactNode } from 'react'
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

enum Filter {
    All,
    Active,
    Complete
}

interface Props {
    todosFolder: firebase.firestore.DocumentData
}

const TodoFilters: React.FC<Props> = ({ todosFolder }) => {
    const classes = useStyles()

    const [filter, setFilter] = useState<Filter>(Filter.All)

    const displayTodos = (): ReactNode => {

        if (filter === Filter.All) {
            return displayAll()

        } else if (filter === Filter.Active) {
            return displayActive()
        }
        
    }

    const displayAll = (): ReactNode => {
        return todosFolder.todo.todos.map((todo: firebase.firestore.DocumentData) => {
            return <TodoItem key={Math.random()} text={todo} currentTodos={todosFolder} index={todosFolder.todo.todos.indexOf(todo)} />
        })
    }

    const displayActive = (): ReactNode => {
        let index: number = 0
        return todosFolder.todo.todos.map((todo: firebase.firestore.DocumentData) => {
            const complete = todosFolder.todo.completed[index++]
            if(!complete) {
                return <TodoItem key={Math.random()} text={todo} currentTodos={todosFolder} index={todosFolder.todo.todos.indexOf(todo)} />
            }
            
        })
    }

    return (
        <div className={classes.TodoFilters}>
            <Button onClick={() => { setFilter(Filter.All) }} className={classes.allButton} variant="contained" color="primary">All</Button>
            <Button onClick={() => { setFilter(Filter.Active) }} className={classes.activeButton} variant="contained" color="primary">Active</Button>
            <Button onClick={() => { setFilter(Filter.Complete) }} className={classes.completedButton} variant="contained" color="primary">Completed</Button>

            <List>
                {todosFolder &&
                    displayTodos()
                }
            </List>
        </div>
    )
}

export default TodoFilters