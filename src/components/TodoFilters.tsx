import React, { useState, ReactNode } from 'react'
import { makeStyles, Theme, Button, List, ButtonGroup } from '@material-ui/core'
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
    const [disabled, setDisabled] = useState({ all: true, active: false, complete: false })

    const displayTodos = (): ReactNode => {
        if (filter === Filter.All) {
            return displayAll()

        } else if (filter === Filter.Active) {
            return displayActive()

        } else if (filter === Filter.Complete) {
            return displayComplete()
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
            const complete: boolean = todosFolder.todo.completed[index++]
            if (!complete) {
                return <TodoItem key={Math.random()} text={todo} currentTodos={todosFolder} index={todosFolder.todo.todos.indexOf(todo)} />
            }
        })
    }

    const displayComplete = (): ReactNode => {
        let index: number = 0
        return todosFolder.todo.todos.map((todo: firebase.firestore.DocumentData) => {
            const complete: boolean = todosFolder.todo.completed[index++]
            if (complete) {
                return <TodoItem key={Math.random()} text={todo} currentTodos={todosFolder} index={todosFolder.todo.todos.indexOf(todo)} />
            }
        })
    }

    return (
        <div className={classes.TodoFilters}>
            <ButtonGroup>
                <Button onClick={() => {
                    setFilter(Filter.All)
                    setDisabled({ all: true, active: false, complete: false })
                }}
                    className={classes.allButton} variant="contained" color="primary" disabled={disabled.all}>All</Button>
                <Button onClick={() => {
                    setFilter(Filter.Active)
                    setDisabled({ all: false, active: true, complete: false })
                }}
                    className={classes.activeButton} variant="contained" color="primary" disabled={disabled.active}>Active</Button>
                <Button onClick={() => {
                    setFilter(Filter.Complete)
                    setDisabled({ all: false, active: false, complete: true })
                }}
                    className={classes.completedButton} variant="contained" color="primary" disabled={disabled.complete}>Completed</Button>
            </ButtonGroup>


            <List>
                {todosFolder &&
                    displayTodos()
                }
            </List>
        </div>
    )
}

export default TodoFilters