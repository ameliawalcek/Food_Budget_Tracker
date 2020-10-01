import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'mobx-react'
import { UserStore } from './stores/UserStore'
import { InputStore } from './stores/InputStore'
import { RecipeStore } from './stores/RecipeStore'

const inputStore = new InputStore()
const userStore = new UserStore()
const recipeStore = new RecipeStore()

const stores = { inputStore, userStore, recipeStore }

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
)
