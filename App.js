import { View, Text,StyleSheet,SafeAreaView,TextInput,TouchableOpacity, FlatList,Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import nosService from './constants'


const App = () => {

  const nosServicerender = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={{
          
          justifyContent: 'center',
          alignItems:'center'
      }}>
        <Image source={item.image}
          resizeMode='cover'
          style={{
            width: '98%',
            height: 200,
            borderRadius: 20,
            margin:10
        }}
        />
          <View style={{
            position: 'absolute',
            bottom: 0,
            height: 50,
            width: '98%',
            backgroundColor: 'black',
            borderTopEndRadius: 20,
            borderTopLeftRadius:20,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            margin:5
            
          }}>
            <View>
              <Ionicons name='add-circle-outline' size={40} color='white' />
            </View>
            <View>
              <Text style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              }}>
                Our Service
              </Text>
             <Text style={{
              color: '#c0bf22e6',
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom:3
            }}>
                {item.service}</Text>
              
            </View>
            
      </View>
        </View>
        </TouchableOpacity>
        )
  }
  return (
    <SafeAreaView style={{
      flex:1
    }}>
    <View style={styles.header}>
        <Text style={styles.title}>AHOBIRI ONLINE</Text>
         
      </View>
      <View style={styles.text}>
        
        <Text style={styles.textsize}>Bienvenue sur Ahobiri le souhait de vos désirs</Text>
      </View>
      <View style={styles.search}>
        <View style={{
          width: '50%',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection:'row'
         
      }}>
        <TextInput placeholder='Nom du Produit ou Menu ' style={{
            
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius:3
         
          }}
          />
          
        </View>
        <View >
          <TouchableOpacity style={{
            backgroundColor: '#005511',
            borderRadius: 4,
            width:115
        }}>
            <Text style={{
              color: '#fff',
              padding:4
          }}>Recherche Rapide</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.header1}>
        <Text style={styles.title}>AHOBIRI ONLINE</Text>
      </View>
      
        <FlatList
          data={nosService}
          keyExtractor={(item => item.id)}
          renderItem={nosServicerender}
        />
     
      </SafeAreaView>
    )
}

export default App

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
  },
  header1: {
    backgroundColor: '#005511',
    padding:10
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    
    alignItems: 'center',
    justifyContent:'center'
    
  },
  text: {
    color: '#005511',
    alignItems: 'center',
    fontSize:25
  },
  textsize: {
    fontSize:17
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#005511',
    padding:10
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding:5,
    alignItems: 'center',
  },
  Buttontxt: {
    alignSelf: 'baseline',
    alignItems: 'baseline',
    height:'18%',
    backgroundColor: '#005511',
    color: 'white',
    
  },
  Input: {
    borderColor: 'black',
    borderWidth:3,
    padding:7
  }
})