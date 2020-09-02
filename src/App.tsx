import React, { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import TodoContainer from './components/TodoContainer'
import useFirebaseFirestorePull from '../src/hooks/useFirebaseFirestorePull'

const App: React.FC = () => {
  const [{ allTodos }, pullTodos] = useFirebaseFirestorePull()
  const [index, setIndex] = useState<number>(1)

  useEffect(() => {
    pullTodos()
  }, [])

  return (
    <div className="App">
      <NavBar />
      {allTodos &&
        <TodoContainer allTodos={allTodos} index={index} />
      }
    </div>
  )
}

export default App
