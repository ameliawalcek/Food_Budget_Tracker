import React from 'react';
import { observer, inject } from "mobx-react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import './App.css';
import SearchPage from './components/Search/SearchPage'
import RecipePage from './components/Recipe/RecipePage'
import NavBar from './components/Nav/NavBar'
import { useTheme } from './hooks/hooks'

const App = inject("userStore")(observer(props => {
  const { darkState } = props.userStore
  const darkTheme = useTheme(darkState)

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <div>
          <NavBar />
          <Route exact path="/" render={() => <SearchPage />} />
          <Route exact path="/recipe/:id" render={() => <RecipePage />} />
        </div>
      </ThemeProvider>

    </Router>
  )
}))

export default App;