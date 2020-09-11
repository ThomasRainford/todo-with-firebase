import React, { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import TodoContainer from './components/TodoContainer'
import useFirebaseFirestorePull from '../src/hooks/useFirebaseFirestorePull'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'

const theme = createMuiTheme()

const App: React.FC = () => {
  const [{ allTodos }, pullTodos] = useFirebaseFirestorePull()
  const [index, setIndex] = useState<number>(1)

  useEffect(() => {
    pullTodos()
  }, [])

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </MuiThemeProvider>


    // <div className="App">
    //   <NavBar />
    //   {allTodos &&
    //     <TodoContainer allTodos={allTodos} index={index} />
    //   }
    // </div>
  )
}

export default App
