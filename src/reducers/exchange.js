import { LOAD_EXCHANGE_DATA } from '../actions/actionTypes'

const initalState = {
  lastUpdate: 0,
  exchanges: {
    NEG: { name: 'Negocie Coins', price: 0, low: 0, high: 0, last: 0, vol: 0 },
    MBT: { name: 'Mercado Bitcoin', price: 0, low: 0, high: 0, last: 0, vol: 0 },
    LOC: { name: 'LocalBitcoins', price: 0, low: 0, high: 0, last: 0, vol: 0 },
    FOX: { name: 'FoxBit', price: 0, low: 0, high: 0, last: 0, vol: 0 },
    FLW: { name: 'flowBTC', price: 0, low: 0, high: 0, last: 0, vol: 0 },
    B2U: { name: 'BitcoinToYou', price: 0, low: 0, high: 0, last: 0, vol: 0 },
    ARN: { name: 'Arena Bitcoin', price: 0, low: 0, high: 0, last: 0, vol: 0 }
  },
  error: null
}

// parses remote api raw response to state format
const _updateExchanges = (state, data) => {
  const nextExchanges = state.exchanges
  Object.keys(state.exchanges).forEach(ex => {
    if (!data['ticker_1h']['exchanges'][ex]) {
      nextExchanges[ex].price = 0
    } else {
      nextExchanges[ex].price = data['ticker_1h']['exchanges'][ex]['vwap']
      nextExchanges[ex].low = data['ticker_1h']['exchanges'][ex]['low']
      nextExchanges[ex].high = data['ticker_1h']['exchanges'][ex]['high']
      nextExchanges[ex].last = data['ticker_1h']['exchanges'][ex]['last']
      nextExchanges[ex].vol = data['ticker_1h']['exchanges'][ex]['vol']
    }
  })
  return nextExchanges
}

export default (state = initalState, action) => {
  switch (action.type) {
    case LOAD_EXCHANGE_DATA:
      return {
        ...state,
        lastUpdate: action.payload.data['timestamp']['total'],
        exchanges: _updateExchanges(state, action.payload.data),
        error: action.payload.error
      }
    default:
      return state
  }
}
