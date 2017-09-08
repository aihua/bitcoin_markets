import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList, View, Text } from 'react-native'
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
    return <Text>{lastUpdate}</Text>
  }

  convertStateToData () {
    const { exchanges } = this.props
    return Object.keys(exchanges).map(k => ({ key: k, ...exchanges[k] }))
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
