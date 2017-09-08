import { combineReducers } from 'redux'
import exchangeReducer from './exchange'

export default combineReducers({
  exchange: exchangeReducer
})
