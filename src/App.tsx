import React from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import NavBar from './components/NavBar'

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <TodoList />
    </div>
  )
}

export default App
