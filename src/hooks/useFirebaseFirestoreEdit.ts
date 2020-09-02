import { db, firebase } from '../firebase'

interface Todo {
    text: string
}

const FirebaseDatabaseAPI = (currentTodo: firebase.firestore.DocumentData, index: number): [
    (values: Todo) => void
] => {

    const editTodo = (values: Todo) => {
        const newTodosArray = currentTodo.todo.todos
        newTodosArray[index] = values.text

        db.collection('todos').doc(currentTodo.id).update({
            todos: newTodosArray
        })
    }

    return [
        editTodo
    ]
}

export default FirebaseDatabaseAPI