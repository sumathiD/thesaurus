// import Definition from './Definition';
import {  View } from 'react-native';
import Home from '../screens/Home';
import Definition from '../screens/Definition';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const NavScreen = () => {
    return(
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Definition" component={Definition} />
        </Stack.Navigator>
    )
}

export default NavScreen;