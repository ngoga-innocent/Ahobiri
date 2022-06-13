import { View, Text } from 'react-native'
import React from 'react'
import Header from '../constants/header'


const Restaurent = ({navigation}) => {
  return (
    <View>
          <Header navigation={navigation} />
          {/* <Text>{ navigation.getParam('service') }</Text> */}
    </View>
  )
}

export default Restaurent