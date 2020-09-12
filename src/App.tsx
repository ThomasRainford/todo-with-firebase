import React, { useState, useEffect } from 'react'
import './App.css'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CircularProgress, CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import LoginPage from './components/LoginPage/LoginPage'
import RegisterPage from './components/RegisterPage/RegisterPage'
import DashboardPage from './components/DashboardPage/DashboardPage'
import { auth } from './firebase'

const theme = createMuiTheme()

const App: React.FC = () => {
  // const [{ allTodos }, pullTodos] = useFirebaseFirestorePull()
  // const [index, setIndex] = useState<number>(1)

  // useEffect(() => {
  //   pullTodos()
  // }, [])

  const [user, setUser] = useState<firebase.User | null>(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log('change: ', user)
      setUser(user)
    });
  }, [])

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/dashboard" component={DashboardPage} />
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
