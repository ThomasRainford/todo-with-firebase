import React, { useState } from 'react'
import { makeStyles, Theme } from '@material-ui/core'
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

interface Todo {
    text: string
}

const TodoContainer: React.FC = () => {
    const classes = useStyles()

    const [todoTitle, setTodoTitle] = useState<string>('This is the Title')
    const [todos, setTodos] = useState<Todo[]>([{
        text: 'Todo 1'
    }, {
        text: 'Todo 2'
    }, {
        text: 'Todo 3'
    }])

    const addTodo = (todo: Todo) => {
        let todoss = [todo, ...todos]
        setTodos(todoss)
    }

    return (
        <div className={classes.Todo}>
            <TodoTitle title={todoTitle}/>
            <NewTodo addTodo={addTodo}/>
            <TodoList todos={todos}/>
        </div>
    )
}

export default TodoContainer