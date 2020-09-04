import React from 'react'
import { List, Theme, makeStyles, Card, CardContent } from '@material-ui/core'
import TodoItem from './TodoItem'

const useStyles = makeStyles((theme: Theme) => ({
    TodoList: {
        flexGrow: 1,
    },
}))

interface Props {
    todosFolder: firebase.firestore.DocumentData
}

const TodoList: React.FC<Props> = ({ todosFolder }) => {
    const classes = useStyles()

    return (
        <Card>
            <CardContent>
                <List>
                    {todosFolder &&
                        todosFolder.todo.todos.map((todo: firebase.firestore.DocumentData) => (
                            <TodoItem key={Math.random()} text={todo} currentTodos={todosFolder} index={todosFolder.todo.todos.indexOf(todo)} />
                        ))
                    }
                </List>
            </CardContent>
        </Card>
    )
}

export default TodoList