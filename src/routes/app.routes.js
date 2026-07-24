import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/home'

const appDrawer = createNativeStackNavigator();

function appRoutes() {
    return(
        <appDrawer.Navigator>
            <appDrawer.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
        </appDrawer.Navigator>
    )
}

export default appRoutes;