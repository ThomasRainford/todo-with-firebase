import { db, firebase } from '../firebase'
import { useState } from 'react'

interface Todo {
    text: string
}

const FirebaseDatabaseAPI = (currentTodo: firebase.firestore.DocumentData, index: number): [
    (values: Todo) => void,
    () => boolean[]
] => {


    const editTodo = (values: Todo) => {
        const newTodosArray = currentTodo.todo.todos
        newTodosArray[index] = values.text

        db.collection('todos').doc(currentTodo.id).update({
            todos: newTodosArray
        })
    }

    const getCompleted = (): boolean[] => {
        const completed: boolean[] = []
        db.collection('todos').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                completed.push(doc.data().completed)
                console.log(doc.data().completed)
            })
        })
        return completed
    }

    return [
        editTodo,
        getCompleted
    ]
}

export default FirebaseDatabaseAPI