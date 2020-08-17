import React, { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import TodoContainer from './components/TodoContainer'
import TodoList from './components/TodoList'

interface Todo {
  text: string
}

interface Todos {
  title: string
  todos: Todo[]
}

const App: React.FC = () => {

  const [todoFolder, setTodoFolder] = useState<Todos[]>([
    {
      title: 'Title 1',
      todos: [{ text: 'Todo 1' }, { text: 'Todo 2' }]
    },
    {
      title: 'Title 2',
      todos: [{ text: 'Todo 1' }, { text: 'Todo 2' }]
    }
  ])

  const [index, setIndex] = useState<number>(0)

  return (
    <div className="App">
      <NavBar />
      <TodoContainer setTodoFolder={setTodoFolder} todosFolder={todoFolder} index={index} />
    </div>
  )
}

export default App
