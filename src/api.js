import axios from 'axios'

const baseAPI = 'https://api.bitvalor.com/v1'
const tickerNode = '/ticker.json'
const exchangesNode = '/exchanges.json'

axios.defaults.baseURL = baseAPI
const onResponse = (resp) => ({ data: resp.data, error: null })
const onError = () => ({ data: null, error: 'Service not available now try again later' })

export const ticker = () => axios({
  method: 'GET',
  url: tickerNode
}).then(onResponse).catch(onError)

export const exchange = () => axios({
  method: 'GET',
  url: exchangesNode
}).then(onResponse).catch(onError)
