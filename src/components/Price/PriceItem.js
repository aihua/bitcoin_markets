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
  lastUpdate: {

  }
}

const PriceItem = () => {
  const {
    exchange, exchangeName, exchangeAbbreviation,
    priceTag, lastUpdate } = styles

  return (
    <Card>
      <CardSection style={exchange}>
        <Text style={exchangeName}>Nome da exchange</Text>
        <Text style={exchangeAbbreviation}>Sigla</Text>
      </CardSection>

      <CardSection>
        <View style={{ flex: 4 }} />
        <Text style={priceTag}>Price tag</Text>
      </CardSection>
      <Text style={lastUpdate}> Last update </Text>
    </Card>
  )
}

export default PriceItem
