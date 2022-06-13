import { View, Text } from 'react-native'
import React from 'react'
import Home from './screen/Home'
import Maindrawer from './Navigation/Drawer/maindrawer'
import Header from './constants/header'

const App = ({navigation}) => {
  return (
    <View style={{flex:1}}>
  
    <Maindrawer navigation={navigation} />
    </View>
  )
}

export default App