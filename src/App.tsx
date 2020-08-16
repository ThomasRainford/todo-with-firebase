import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Todo from './components/Todo'

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Todo />
    </div>
  )
}

export default App
