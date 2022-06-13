import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../../screen/Home';
import Header from '../../constants/header';

// import Restaurent from '../../screen/Restaurent';
import Restaurent from '../../screen/restaurent';





const Drawer = createDrawerNavigator();

export default function maindrawer( navigation) {
  return (
    <NavigationContainer  >
      <Drawer.Navigator  >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name='Restaurent' component={Restaurent} />
        {/* <Drawer.Screen name='Acceuil' component={Restaurent} /> */}
        {/* <Drawer.Screen name='A propos de nous' component={Home} />
        <Drawer.Screen name='Nos Services' component={Header} />
        <Drawer.Screen name='Nous Contacter' component={Home} /> */}
    
      </Drawer.Navigator>
    </NavigationContainer>
  );
}