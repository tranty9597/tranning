import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { WelcomeScreen } from '../welcome-screen';
import { OtpView } from '../life-cycle';
import { View } from 'react-native';
import { PaymentCard } from '../payment-card';
import { YogaLayout } from '../yoga-layout';
import { DrawerNavigator } from './DrawerNavigator';

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const StackNavigator: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='YogaLayout'
                component={YogaLayout}
            />
            <Stack.Screen
                name='PaymentCard'
                component={PaymentCard}
            />
        </Stack.Navigator>
    )
}

const TabNavigator: React.FC = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen
                name='WelcomeScreen'
                component={WelcomeScreen}
            />
            <Tabs.Screen
                name='Otp'
                component={StackNavigator}
            />
            <Tabs.Screen
                name='Drawer'
                component={DrawerNavigator}
            />
            <Tabs.Screen
                name='Otp2'
                component={OtpView}
            />
            <Tabs.Screen
                name='Otp3'
                component={OtpView}
            />
        </Tabs.Navigator>
    )
}

export const RootNavigator: React.FC = (props) => {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
}

