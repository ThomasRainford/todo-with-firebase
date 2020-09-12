import React, { useState } from 'react'
import './App.css'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import LoginPage from './components/LoginPage/LoginPage'
import RegisterPage from './components/RegisterPage/RegisterPage'
import DashboardPage from './components/DashboardPage/DashboardPage'

const theme = createMuiTheme()

const App: React.FC = () => {
  // const [{ allTodos }, pullTodos] = useFirebaseFirestorePull()
  // const [index, setIndex] = useState<number>(1)

  // useEffect(() => {
  //   pullTodos()
  // }, [])

  const [firebaseInitialised, setFirebaseInitialised] = useState<boolean>(false)

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
