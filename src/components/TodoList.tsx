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
        //<div className={classes.TodoList}>
        <Card>
            <CardContent>
                <List>
                    {todosFolder &&
                        todosFolder.todo.todos.map((todo: firebase.firestore.DocumentData) => (
                            <TodoItem key={Math.random()} text={todo} currentTodo={todosFolder} index={todosFolder.todo.todos.indexOf(todo)} />
                        ))
                    }
                </List>
            </CardContent>
        </Card>
        // {/* </div> */}
    )
}

export default TodoList