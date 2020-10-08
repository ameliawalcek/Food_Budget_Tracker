import React from 'react'
import './App.css'
import { observer, inject } from "mobx-react"
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import { useTheme, useIsAuth } from './hooks/hooks'
import SearchPage from './components/Search/SearchPage'
import WeekPlanner from './components/Calender/WeekPlanner'
import RecipePage from './components/RecipePage/RecipePage'
import NavBar from './components/Nav/NavBar'
import Login from './components/Login/Login'
import Favorites from './components/Favorites/Favorites'
import Loading from './components/Loader/Loading'

const App = inject("userStore", "recipeStore")(observer(props => {
  const { darkState, isLoggedIn, cookieLogIn, loading } = props.userStore
  const darkTheme = useTheme(darkState)
  useIsAuth(cookieLogIn)

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <div className='main-container'>
          <NavBar />
          {loading
            ? <Loading />
            : <>
              <Route exact path="/auth/login" render={() => (isLoggedIn ? <Redirect to="/" /> : <Login />)} />
              <Route exact path="/auth/register" render={() => (isLoggedIn ? <Redirect to="/" /> : <Login />)} />
              <Route exact path="/" render={() => <SearchPage />} />
              <Route exact path="/profile" render={() => <SearchPage />} />
              <Route exact path="/recipe/:id" render={() => <RecipePage />} />
              <Route exact path="/list" render={() => <RecipePage />} />
              <Route exact path="/favorites" render={() => <Favorites />} />
              <Route exact path="/kitchen" render={() => <RecipePage />} />
              <Route exact path="/weekplan" render={() => <WeekPlanner />} />
            </>
          }
        </div>
      </ThemeProvider>
    </Router >
  )
}))

export default App