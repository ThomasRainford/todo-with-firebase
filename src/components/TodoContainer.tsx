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

interface Todos {
    title: string
    todos: Todo[]
}

interface Props {
    setTodoFolder: Function,
    todosFolder: Todos[]
    index: number
}

const TodoContainer: React.FC<Props> = ({ setTodoFolder, todosFolder, index }) => {
    const classes = useStyles()

    const addTodo = (todo: Todo) => {
        let todos: Todo[] = [...todosFolder[index].todos]
        const newTodos: Todo[] = [todo, ...todos]
        
        todos = newTodos
        todosFolder[index].todos = [...todos]

        setTodoFolder([...todosFolder])
    }

    return (
        <div className={classes.Todo}>
            <TodoTitle title={todosFolder[index].title} />
            <NewTodo addTodo={addTodo} />
            <TodoList todos={todosFolder[index].todos} />
        </div>
    )
}

export default TodoContainer