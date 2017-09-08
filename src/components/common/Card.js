import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

const styles = {
  containerStyle: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1
  }

}

const Card = (props) => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
)

Card.propTypes = {
  children: PropTypes.any
}
export default Card
