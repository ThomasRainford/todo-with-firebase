import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import TodoContainer from './components/TodoContainer'

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <TodoContainer />
    </div>
  )
}

export default App
