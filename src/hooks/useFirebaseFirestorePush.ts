import { auth, db, firebase } from '../firebase'

interface Todo {
    text: string
}

const FirebaseDatabaseAPI = (currentTodos: firebase.firestore.DocumentData): [
    Function
] => {

    const pushTodos = (values: Todo) => {

        db.collection('users')
            .doc(auth.currentUser?.uid)
            .collection('todoLists')
            .doc('list-0') /* Get this from index value */
            .collection('todos')
            .doc(currentTodos.id) /* <- Need to pass todos collection to this hook. */
            .update({
                text: values.text,
                completed: false
            })


        // db.collection('todos').doc(currentTodos.id).update({
        //     todos: firebase.firestore.FieldValue.arrayUnion(values.text)
        // })

        // db.collection('todos').doc(currentTodos.id).update({
        //     completed: firebase.firestore.FieldValue.arrayUnion(false)
        // })
    }

    return [
        pushTodos
    ]
}

export default FirebaseDatabaseAPI