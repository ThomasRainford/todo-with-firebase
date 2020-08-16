import React from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  )
}

export default App
