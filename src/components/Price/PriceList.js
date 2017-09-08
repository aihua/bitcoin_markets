import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import PriceItem from './PriceItem'

class PriceList extends Component {
  static navigationOptions = {
    title: 'Welcome'
  }
  renderItem = (item) => {
    return (
      <View style={{paddingBottom: 15}}>
        <PriceItem />
      </View>
    )
  }

  render () {
    return (
      <FlatList
        data={[{key: 1}, {key: 2}, {key: 3}, {key: 4}, {key: 5}]}
        renderItem={this.renderItem}
      />
    )
  }
}
export default PriceList
