import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import Router from './components/Router'
import reducers from './reducers'

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
