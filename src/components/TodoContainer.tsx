import React, { useState, useEffect } from 'react'
import { makeStyles, Theme } from '@material-ui/core'
import TodoTitle from './TodoTitle';
import TodoList from './TodoList';
import NewTodo from './NewTodo';
import { db } from '../firebase';

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
    setTodosFolder: Function,
    todosFolder: firebase.firestore.DocumentData[] | undefined
    index: number
}

const TodoContainer: React.FC<Props> = ({ setTodosFolder: setTodoFolder, todosFolder, index }) => {
    const classes = useStyles()

    return (
        <div className={classes.Todo}>
            {todosFolder && 
                <div>
                    <TodoTitle todosFolder={todosFolder[index]} />
                    <NewTodo currentTodo={todosFolder[index]} />
                    <TodoList todosFolder={todosFolder[index]} />
                </div>
            }
        </div>
    )
}

export default TodoContainer