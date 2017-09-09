import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList, View, Text, Image, TouchableHighlight,
  NativeModules, ToastAndroid } from 'react-native'
import { connect } from 'react-redux'
import actions from '../../actions'
import theme from '../../theme'
import PriceItem from './PriceItem'

class PriceList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      refreshing: false
    }
    this.onRefresh = this.onRefresh.bind(this)
    this.onInfoPress = this.onInfoPress.bind(this)
  }
  static propTypes = {
    exchanges: PropTypes.object,
    lastUpdate: PropTypes.number,
    error: PropTypes.string,
    loadExchangeData: PropTypes.func,
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    })
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Bitcoin Prices in Brazil',
    headerStyle: { backgroundColor: theme.primary.default },
    headerTitleStyle: { color: theme.primary.text, fontWeight: 'normal' },
    headerRight: (
      <View style={{ paddingRight: 30 }}>
        <TouchableHighlight
          onPress={() => navigation.navigate('Info')}
        >
          <Image
            source={require('../../assets/question_mark_icon.png')}
            style={{height: 24, width: 24}}
          />
        </TouchableHighlight>
      </View>
    )
  })

  onInfoPress () {
    this.props.navigation.navigate('Info')
  }
  componentWillMount () {
    this.props.loadExchangeData()
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.refreshing) {
      ToastAndroid.show('Prices updated', ToastAndroid.SHORT)
    } else if (nextProps.error) {
      ToastAndroid.show(JSON.stringify(nextProps.error), ToastAndroid.LONG)
    }
    this.setState({refreshing: false})
  }

  onRefresh () {
    this.setState({refreshing: true})
    return this.props.loadExchangeData()
  }

  renderLastUpdateTime () {
    const {lastUpdate} = this.props
    const locale = NativeModules.I18nManager.localeIdentifier.replace('_', '-')
    const date = new Date(Date(lastUpdate))
    const day = date.toLocaleDateString(locale).split('/')
    const time = date.toLocaleTimeString(locale)
    return (
      <Text style={{fontSize: 12, paddingLeft: 8, paddingBottom: 10}}>
        {`Last updated at ${time} on ${day[0]}/${day[1]}`}
      </Text>
    )
  }

  convertStateToData () {
    const { exchanges } = this.props
    return Object.keys(exchanges).map(k => ({ key: k, ...exchanges[k] }))
  }

  renderItem = ({item}) => {
    return (
      <View style={{paddingBottom: 15}}>
        <PriceItem
          name={item.name} price={item.price}
          lastUpdate={item.lastUpdate} abbr={item.key}
          high={item.high} low={item.low} vol={item.vol}
          last={item.last}
        />
      </View>
    )
  }

  render () {
    return (
      <View>
        <FlatList
          ListFooterComponent={this.renderLastUpdateTime()}
          data={this.convertStateToData()}
          renderItem={this.renderItem}
          onRefresh={this.onRefresh}
          refreshing={this.state.refreshing}
          style={{backgroundColor: '#E1E2E1'}}
        />
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    exchanges: state.exchange.exchanges,
    lastUpdate: state.exchange.lastUpdate,
    error: state.exchange.error
  }
}
export default connect(mapStateToProps, actions)(PriceList)
