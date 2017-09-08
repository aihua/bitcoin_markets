import { StackNavigator } from 'react-navigation'
import PriceList from './components/Price/PriceList'

const App = StackNavigator({
  PriceList: { screen: PriceList }

})

export default App
