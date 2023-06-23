
/*import App from './components/Profile';*/
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileScreen from './components/Profile';
import AgeScreen from './components/Age';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Profile" component={ProfileScreen} />
                <Tab.Screen name="Age" component={AgeScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}


