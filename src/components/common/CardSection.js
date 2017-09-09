import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

const styles = {
  constainerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'relative',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    backgroundColor: '#fff'
  }
}

const CardSection = (props) => (
  <View style={[styles.constainerStyle, props.style]}>
    {props.children}
  </View>
)

CardSection.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any
}
export default CardSection
