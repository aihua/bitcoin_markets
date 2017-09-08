import { LOAD_EXCHANGE_DATA } from '../actions/actionTypes'

const initalState = {
  priceList: [],
  timeStamps: {
    lastUpdate: 0,
    byEchange: {}
  },
  exchanges: {
    NEG: 'Negocie Coins',
    MBT: 'Mercado Bitcoin',
    LOC: 'LocalBitcoins',
    FOX: 'FoxBit',
    FLW: 'flowBTC',
    B2U: 'BitcoinToYou',
    ARN: 'Arena Bitcoin'
  }
}

// parses remote api raw response to state format
const _priceList = (state, data) =>
  Object.keys(state.exchanges).map(ex => ({[ex]: data['ticker_1h']['exchanges'][ex]['vwap']}))

const _lastUdpate = (state, data) =>
  Object.keys(state.exchanges).map(ex => ({[ex]: data['timeStamp']['exchanges'][ex]}))

export default (state = initalState, action) => {
  switch (action.type) {
    case LOAD_EXCHANGE_DATA:
      return {
        ...state,
        priceList: _priceList(state, action.payoad),
        timeStamps: {
          lastUpdate: action.payload['timestamp']['total'],
          byExchange: _lastUdpate(state, action.paylaod)
        }}
    default:
      return state
  }
}
