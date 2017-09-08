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
    fontSize: 20
  },
  lastUpdateInfo: {

  }
}
// can't be props otherwise liner will start bitching
// about PropTypes.
const PriceItem = (properties) => {
  const {
    exchange, exchangeName, exchangeAbbreviation,
    priceTag, lastUpdateInfo} = styles
  const { name, price, lastUpdate, abbr } = properties

  return (
    <Card>
      <CardSection style={exchange}>
        <Text style={exchangeName}>{name}</Text>
        <Text style={exchangeAbbreviation}>{abbr}</Text>
      </CardSection>

      <CardSection>
        <View style={{ flex: 4 }} />
        <Text style={priceTag}>{`R$ ${price.toFixed(2).replace('.', ',')}`}</Text>
      </CardSection>
      <Text style={lastUpdateInfo}>{lastUpdate}</Text>
    </Card>
  )
}

export default PriceItem
