import { db, firebase } from '../firebase'

const FirebaseDatabaseAPI = (currentTodo: firebase.firestore.DocumentData, text: firebase.firestore.DocumentData): [
    Function
] => {

    const removeTodo = () => {
        db.collection('todos').doc(currentTodo.id).update({
            todos: firebase.firestore.FieldValue.arrayRemove(text)
        });
    }

    return [
        removeTodo
    ]
}

export default FirebaseDatabaseAPI