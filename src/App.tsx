import React, { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import TodoContainer from './components/TodoContainer'
import { db } from './firebase'

const App: React.FC = () => {
  const [todosFolder, setTodosFolder] = useState<firebase.firestore.DocumentData[]>()
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    pullTodos()
  }, [])

  const pullTodos = () => {
    db.collection('todos').onSnapshot((snapshot) => {
      setTodosFolder(snapshot.docs.map((doc) => ({
        id: doc.id,
        todo: doc.data()
      })))
    })
  }

  return (
    <div className="App">
      <NavBar />
      {todosFolder &&
        <TodoContainer setTodosFolder={setTodosFolder} todosFolder={todosFolder} index={index} />
      }
    </div>
  )
}

export default App
