import { db, firebase } from '../firebase'

interface Todo {
    text: string
}

const FirebaseDatabaseAPI = (currentTodo: firebase.firestore.DocumentData): [
    Function
] => {

    const pushTodos = (values: Todo) => {
        db.collection('todos').doc(currentTodo.id).update({
            todos: firebase.firestore.FieldValue.arrayUnion(values.text)
        });
    }

    return [
        pushTodos
    ]
}

export default FirebaseDatabaseAPI