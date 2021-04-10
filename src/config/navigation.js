import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import MainScreen from '../screens/MainScreen'
import LoginScreen from '../screens/LoginScreen'
import NutritionTipsScreen from '../screens/NutritionTipsScreen'

const MainStack = createStackNavigator() 
const MainStackScreen = () => (
    <MainStack.Navigator>
        <MainStack.Screen 
            name='Main' 
            component={MainScreen} 
            options={() => ({headerShown: false})}
        />
        <MainStack.Screen name='Login' component={LoginScreen} />
    </MainStack.Navigator>
)

//drawer navigator. Nested MainStackNavigator inside as first. 
const AppDrawer = createDrawerNavigator()
const AppDrawerScreen = () => (
    <AppDrawer.Navigator>
        <AppDrawer.Screen name='Main' component={MainStackScreen} />
        <AppDrawer.Screen 
            name='Tips' 
            component={NutritionTipsScreen} 
            options={() => ({headerShown: false})}
        />
    </AppDrawer.Navigator>
)

export default () => (
    <NavigationContainer>
        <AppDrawerScreen />
    </NavigationContainer>
)