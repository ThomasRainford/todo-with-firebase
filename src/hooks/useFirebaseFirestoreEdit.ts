import { auth, db, firebase } from '../firebase'

interface Todo {
    text: string
}

const FirebaseDatabaseAPI = (currentTodos: firebase.firestore.DocumentData, index: number): [
    (values: Todo) => void,
    () => void,
] => {

    const editTodo = (values: Todo) => {
        // const newTodosArray = currentTodos.todo.todos
        // newTodosArray[index] = values.text

        db.collection('users')
            .doc(auth.currentUser?.uid)
            .collection('todoLists')
            .doc('list-0') /* Get this from index value */
            .collection('todos')
            .doc(currentTodos.id) /* <- Need to pass todos collection to this hook. */
            .update({
                completed: !currentTodos.completed
            })

        // db.collection('todos').doc(currentTodos.id).update({
        //     todos: newTodosArray
        // })
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