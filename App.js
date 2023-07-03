import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { ProfileProvider, ProfileContext } from './components/ProfileContext';
import ProfileScreen from './components/Profile';
import AgeScreen from './components/Age';
import BmiScreen from './components/Bmi';

const Tab = createBottomTabNavigator();

export default function App() {
    const profileData = { name: '', age: '', weight: '', height: '' };

    return (
        <ProfileProvider value={profileData}>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Profile" component={ProfileScreen} />
                    <Tab.Screen name="Age" component={AgeScreen} />
                    <Tab.Screen name="Bmi" component={BmiScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </ProfileProvider>
    );
}

