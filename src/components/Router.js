import { StackNavigator } from 'react-navigation'
import PriceList from './Price/PriceList'
import Info from './Info'

const RouterComponent = StackNavigator({
  PriceList: { screen: PriceList },
  Info: {screen: Info}
})

export default RouterComponent
