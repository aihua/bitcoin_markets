import { StackNavigator } from 'react-navigation'
import PriceList from './Price/PriceList'

const RouterComponent = StackNavigator({
  PriceList: { screen: PriceList }
})

export default RouterComponent
