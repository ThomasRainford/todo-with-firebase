import { auth } from '../firebase'
import { useState } from 'react'
import { db, firebase } from '../firebase'

const FirebaseDatabaseAPI = (): [
    {
        allTodos: firebase.firestore.DocumentData[] | undefined
    },
    Function
] => {

    const [allTodos, setAllTodos] = useState<firebase.firestore.DocumentData[]>()

    const [at, setAt] = useState<firebase.firestore.DocumentData[]>()

    const pullTodos = () => {
        db.collection('users')
            .doc(auth.currentUser?.uid)
            .collection('todoLists')
            .doc('list-0') /* Get this from index value */
            .collection('todos').onSnapshot((snapshot) => {
                setAt(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    todo: doc.data()
                })))
            })
        // db.collection('todos').onSnapshot((snapshot) => {
        //     setAllTodos(snapshot.docs.map((doc) => ({
        //         id: doc.id,
        //         todo: doc.data()
        //     })))
        // })
    }

    return [
        { allTodos },
        pullTodos
    ]
}

export default FirebaseDatabaseAPI