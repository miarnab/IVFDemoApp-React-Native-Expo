import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstLoginScreen from '../screens/FirstLoginScreen';
import SecondLoginScreen from '../screens/SecondLoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DashboardScreen from '../screens/DashboardScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NewAppointmentScreen from '../screens/NewAppointmentScreen';

const Stack = createNativeStackNavigator();

export default function Navigation(){
    return(
        <NavigationContainer independent={true}>
          <Stack.Navigator>
                    <Stack.Screen
                        name="OTPLogin"
                        component={FirstLoginScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="UsernameLogin"
                        component={SecondLoginScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Register"
                        component={RegisterScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Dashboard"
                        component={DashboardScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Notifications"
                        component={NotificationsScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Profile"
                        component={ProfileScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="NewAppointment"
                        component={NewAppointmentScreen}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
        </NavigationContainer>
    );
}