import { useState } from 'react'
import { db, firebase } from '../firebase'

const FirebaseDatabaseAPI = (): [
    {
        allTodos: firebase.firestore.DocumentData[] | undefined
    },
    Function
] => {

    const [allTodos, setAllTodos] = useState<firebase.firestore.DocumentData[]>()

    const pullTodos = () => {
        db.collection('todos').onSnapshot((snapshot) => {
            setAllTodos(snapshot.docs.map((doc) => ({
                id: doc.id,
                todo: doc.data()
            })))
        })
    }

    return [
        { allTodos },
        pullTodos
    ]
}

export default FirebaseDatabaseAPI