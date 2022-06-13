import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Header = ({navigation}) => {
    const drawerf = () => {
         navigation.openDrawer()
       
    }
  return (
    <View style={styles.header}>
          <Ionicons name='menu' size={40} onPress={ drawerf } color='white'/>      
          <Text style={styles.title}>AHOBIRI ONLINE</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        backgroundColor: '#005511',
          padding: 10,
          flexDirection: 'row',
          justifyContent:'space-between'
        
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        
        alignItems: 'center',
        justifyContent:'center'
        
      },
})

export default Header