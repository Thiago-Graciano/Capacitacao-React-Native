import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/home'

const appDrawer = createDrawerNavigator();

function appRoutes() {
    return(
        <appDrawer.Navigator>
            <appDrawer.Screen
                name="Home"
                component={Home}
            />
        </appDrawer.Navigator>
    )
}

export default appRoutes;