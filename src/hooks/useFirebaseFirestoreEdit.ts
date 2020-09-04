import { db, firebase } from '../firebase'
import { useState } from 'react'

interface Todo {
    text: string
}

const FirebaseDatabaseAPI = (currentTodos: firebase.firestore.DocumentData, index: number): [
    (values: Todo) => void,
    () => void,
] => {

    const editTodo = (values: Todo) => {
        const newTodosArray = currentTodos.todo.todos
        newTodosArray[index] = values.text

        db.collection('todos').doc(currentTodos.id).update({
            todos: newTodosArray
        })
    }

    const editCompleted = () => {
        const newCompletedArray: boolean[] = currentTodos.todo.completed
        newCompletedArray[index] = !currentTodos.todo.completed[index]

        db.collection('todos').doc(currentTodos.id).update({
            completed: newCompletedArray
        })
    }

    return [
        editTodo,
        editCompleted,
    ]
}

export default FirebaseDatabaseAPI