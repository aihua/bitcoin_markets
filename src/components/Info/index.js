import React from 'react'
import { View, Text } from 'react-native'
import theme from '../../theme'

const styles = {
  block: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroundColor: theme.background
  },
  title: {
    paddingLeft: 14,
    paddingTop: 15,
    fontSize: 24,
    fontWeight: 'bold'
  },
  textLine: {
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 5,
    fontSize: 16
  }
}

const Info = () => {
  const { title, textLine, block } = styles
  return (
    <View style={{backgroundColor: theme.background, flex: 1}}>
      <View style={block}>
        <Text style={title}>What are all those numbers?</Text>
        <Text style={textLine}>High: largest amount in Reais of an operation within one hour period</Text>
        <Text style={textLine}>Low: smallest amount in Reais of an operation within one hour period</Text>
        <Text style={textLine}>Vol: operation's amount in BTC within one hour period</Text>
        <Text style={textLine}>Last: price in Reais based on each exchanges' last trade weighted by it's volume within period boundaries</Text>
        <Text style={textLine}>Price: volume weighted average price</Text>
      </View>

      <View style={block}>
        <Text style={title}>Why some values are zero?</Text>
        <Text style={textLine}>Unfortunately not all values are provided proprely to this API and for those the default values are zero</Text>
      </View>
    </View>
  )
}

Info.navigationOptions = {
  title: 'Help',
  headerStyle: { backgroundColor: theme.primary.default },
  headerTitleStyle: { color: theme.primary.text, fontWeight: 'normal' }
}
export default Info
