import { LOAD_EXCHANGE_DATA } from './actionTypes'
import * as api from '../api'

export const loadExchangeData = () => (dispatch) =>
  api.ticker().then(
    (data) => dispatch({type: LOAD_EXCHANGE_DATA, payload: data}),
    (error) => console.log(error)
  )
