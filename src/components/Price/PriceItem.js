import React from 'react'
import { Text, View } from 'react-native'
import { Card, CardSection } from '../common'

const styles = {
  exchange: {
  },
  exchangeName: {
    flex: 4,
    paddingLeft: 5,
    fontSize: 24
  },
  exchangeAbbreviation: {
    flex: 3,
    fontSize: 24
  },
  priceTag: {
    alignSelf: 'flex-end',
    paddingRight: 14,
    paddingTop: 14,
    fontSize: 20,
    fontWeight: 'bold'
  }
}
// can't be props otherwise liner will start bitching
// about PropTypes.
const PriceItem = (properties) => {
  const {
    exchange, exchangeName, exchangeAbbreviation,
    priceTag } = styles
  const { name, price, abbr, low, high, last, vol } = properties
  return (
    <Card>
      <CardSection style={exchange}>
        <Text style={exchangeName}>{name}</Text>
        <Text style={exchangeAbbreviation}>{abbr}</Text>
      </CardSection>

      <CardSection>
        <View style={{ flex: 3 }} >
          <Text>{`high: ${high}`}</Text>
          <Text>{`low:  ${low}`}</Text>
        </View>
        <View style={{flex: 4}}>
          <Text>{`vol:  ${vol}`}</Text>
          <Text>{`last: ${last}`}</Text>
        </View>
        <Text style={priceTag}>{`R$ ${price.toFixed(2).replace('.', ',')}`}</Text>
      </CardSection>
    </Card>
  )
}

export default PriceItem
