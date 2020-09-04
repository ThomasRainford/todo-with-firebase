import { db, firebase } from '../firebase'

interface Todo {
    text: string
}

const FirebaseDatabaseAPI = (currentTodos: firebase.firestore.DocumentData): [
    Function
] => {

    const pushTodos = (values: Todo) => {
        db.collection('todos').doc(currentTodos.id).update({
            todos: firebase.firestore.FieldValue.arrayUnion(values.text)
        })

        db.collection('todos').doc(currentTodos.id).update({
            completed: firebase.firestore.FieldValue.arrayUnion(false)
        })
    }

    return [
        pushTodos
    ]
}

export default FirebaseDatabaseAPI