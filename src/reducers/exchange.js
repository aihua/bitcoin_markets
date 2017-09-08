import { LOAD_EXCHANGE_DATA } from '../actions/actionTypes'

const initalState = {
  lastUpdate: 0,
  exchanges: {
    NEG: { name: 'Negocie Coins', price: 0 },
    MBT: { name: 'Mercado Bitcoin', price: 0 },
    LOC: { name: 'LocalBitcoins', price: 0 },
    FOX: { name: 'FoxBit', price: 0 },
    FLW: { name: 'flowBTC', price: 0 },
    B2U: { name: 'BitcoinToYou', price: 0 },
    ARN: { name: 'Arena Bitcoin', price: 0 }
  }
}

// parses remote api raw response to state format
const _updateExchanges = (state, data) => {
  const nextExchanges = state.exchanges
  Object.keys(state.exchanges).forEach(ex => {
    if (!data['ticker_1h']['exchanges'][ex]) {
      nextExchanges[ex].price = 0
    } else {
      nextExchanges[ex].price = data['ticker_1h']['exchanges'][ex]['vwap']
    }
  })
  return nextExchanges
}

export default (state = initalState, action) => {
  console.log({action})
  switch (action.type) {
    case LOAD_EXCHANGE_DATA:
      return {
        ...state,
        lastUpdate: action.payload.data['timestamp']['total'],
        exchanges: _updateExchanges(state, action.payload.data)
      }
    default:
      return state
  }
}
