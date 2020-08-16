import React, { useState } from 'react'
import { makeStyles, Theme } from '@material-ui/core'
import TodoTitle from './TodoTitle';
import TodoList from './TodoList';

const useStyles = makeStyles((theme: Theme) => ({
    Todo: {
        flexGrow: 1,
        margin: 'auto',
        width: '50%',
    },
}));

const Todo: React.FC = () => {
    const classes = useStyles()

    const [todoTitle, setTodoTitle] = useState<string>('This is the Title')
    const [todos, setTodos] = useState([{
        text: 'Todo 1'
    }, {
        text: 'Todo 2'
    }, {
        text: 'Todo 3'
    }])

    return (
        <div className={classes.Todo}>
            <TodoTitle title={todoTitle}/>
            <TodoList todos={todos}/>
        </div>
    )
}

export default Todo