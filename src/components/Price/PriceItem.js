import React from 'react'
import { Text, View } from 'react-native'
import { Card, CardSection } from '../common'
import theme from '../../theme'

const styles = {
  exchange: {
    backgroundColor: theme.secundary.default
  },
  exchangeName: {
    flex: 4,
    paddingLeft: 5,
    fontSize: 24,
    color: theme.secundary.text
  },
  exchangeAbbreviation: {
    flex: 3,
    fontSize: 24,
    color: theme.secundary.text
  },
  priceTag: {
    alignSelf: 'flex-end',
    paddingRight: 14,
    paddingTop: 14,
    fontSize: 20,
    fontWeight: 'bold'
  },
  otherIndexes: {
    justifyContent: 'space-between'
  }
}
// can't be props otherwise liner will start bitching
// about PropTypes.
const PriceItem = (properties) => {
  const {
    exchange, exchangeName, exchangeAbbreviation,
    priceTag, otherIndexes } = styles
  const { name, price, abbr, low, high, last, vol } = properties
  return (
    <Card>
      <CardSection style={exchange}>
        <Text style={exchangeName}>{name}</Text>
        <Text style={exchangeAbbreviation}>{abbr}</Text>
      </CardSection>

      <CardSection style={otherIndexes}>
        <View style={{ flex: 5 }} >
          <Text >{`high: ${high.toFixed(2).replace('.', ',')}`}</Text>
          <Text >{`low:  ${low.toFixed(2).replace('.', ',')}`}</Text>
        </View>
        <View style={{ flex: 7 }}>
          <Text style={{fontSize: 12}}>{`vol:  ${vol}`}</Text>
          <Text style={{fontSize: 12}}>{`last: ${last}`}</Text>
        </View>
        <Text style={priceTag}>{`R$ ${price.toFixed(2).replace('.', ',')}`}</Text>
      </CardSection>
    </Card>
  )
}

export default PriceItem
