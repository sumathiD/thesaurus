import { Text, View } from 'react-native';
import React from "react";
import NavScreen from './navigation/Navscreen';
// import Definition from './Definition';
// import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  return (
        
    <NavigationContainer>
       {/* <Home />
      <Definition />  */}
      <NavScreen />
    </NavigationContainer>
    
  );
}