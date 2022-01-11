import React from 'react'
import Home from './Home';
import Survey from './Survey';

import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const Nav = () => {
    return (
        <Stack.Navigator 
        screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Survey" component={Survey} />
        </Stack.Navigator>

    )
}

export default Nav
