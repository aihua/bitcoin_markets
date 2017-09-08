import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList, View, Text, NativeModules } from 'react-native'
import { connect } from 'react-redux'
import actions from '../../actions'
import PriceItem from './PriceItem'

class PriceList extends Component {
  static propTypes = {
    exchanges: PropTypes.object,
    lastUpdate: PropTypes.number,
    loadExchangeData: PropTypes.func
  }

  static navigationOptions = {
    title: 'Welcome'
  }

  componentWillMount () {
    this.props.loadExchangeData()
  }

  renderLastUpdateTime () {
    const {lastUpdate} = this.props
    const locale = NativeModules.I18nManager.localeIdentifier.replace('_', '-')
    const date = new Date(Date(lastUpdate))
    const day = date.toLocaleDateString(locale).split('/')
    const time = date.toLocaleTimeString(locale)
    return <Text>{`Last updated at ${time} on ${day[0]}/${day[1]}`}</Text>
  }

  convertStateToData () {
    const { exchanges } = this.props
    const ret = Object.keys(exchanges).map(k => ({ key: k, ...exchanges[k] }))
    console.log({ret})
    return ret
  }

  renderItem = ({item}) => {
    return (
      <View style={{paddingBottom: 15}}>
        <PriceItem
          name={item.name} price={item.price}
          lastUpdate={item.lastUpdate} abbr={item.key}
        />
      </View>
    )
  }

  render () {
    return (
      <View>
        {this.renderLastUpdateTime()}
        <FlatList
          data={this.convertStateToData()}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    exchanges: state.exchange.exchanges,
    lastUpdate: state.exchange.lastUpdate
  }
}
export default connect(mapStateToProps, actions)(PriceList)
