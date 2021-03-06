import React from 'react'
import { makeStyles, Theme, Card, CardContent } from '@material-ui/core'
import TodoTitle from './TodoTitle';
import TodoList from './TodoList';
import NewTodo from './NewTodo';

const useStyles = makeStyles((theme: Theme) => ({
    Todo: {
        flexGrow: 1,
        margin: 'auto',
        width: '60%',
        paddingTop: '1%',
        paddingBottom: '1%',
    },
}));

interface Props {
    allTodos: firebase.firestore.DocumentData[] | undefined
    index: number
}

const TodoContainer: React.FC<Props> = ({ allTodos: todosFolder, index }) => {
    const classes = useStyles()

    return (
        <div className={classes.Todo}>
            {todosFolder &&
                <div>
                    <Card style={{ backgroundColor: '#ECF0F1' }}>
                        <CardContent>
                            <TodoTitle todosFolder={todosFolder[index]} />
                            <NewTodo currentTodo={todosFolder[index]} />
                            <TodoList todosFolder={todosFolder[index]} />
                        </CardContent>
                    </Card>
                </div>
            }
        </div>
    )
}

export default TodoContainer