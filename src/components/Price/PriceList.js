import React, { Component } from 'react'
import { View } from 'react-native'
import PriceItem from './PriceItem'

class PriceList extends Component {
  static navigationOptions = {
    title: 'Welcome'
  }

  render () {
    return (
      <View>
        <PriceItem />
        <PriceItem />
        <PriceItem />
      </View>
    )
  }
}
export default PriceList
