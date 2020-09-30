import { auth, db, firebase } from '../firebase'

const FirebaseDatabaseAPI = (currentTodo: firebase.firestore.DocumentData, text: firebase.firestore.DocumentData): [
    Function
] => {

    const removeTodo = () => {

        db.collection('users')
            .doc(auth.currentUser?.uid)
            .collection('todoLists')
            .doc('list-0') /* Get this from index value */
            .collection('todos')
            .doc(currentTodo.id) /* <- Need to pass todos collection to this hook. */
            .delete()

        // db.collection('todos').doc(currentTodo.id).update({
        //     todos: firebase.firestore.FieldValue.arrayRemove(text)
        // });
    }

    return [
        removeTodo
    ]
}

export default FirebaseDatabaseAPI