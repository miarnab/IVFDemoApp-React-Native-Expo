import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import AppointmentScreen from "../screens/AppointmentScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DoctorSearchScreen from "../screens/DoctorSearchScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import NewAppointmentScreen from '../screens/NewAppointmentScreen';
import { StyleSheet } from "react-native";

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation(){

    return(
            <NavigationContainer independent={true}>
                <Tab.Navigator barStyle={{ position: 'absolute', overflow:'hidden', height:55, left: 20, bottom: 10, right: 20, backgroundColor: "#ffffff", borderBottomLeftRadius: 15, borderBottomRightRadius: 15, borderTopLeftRadius: 15, borderTopRightRadius: 15, elevation: 30, shadowColor: '#52006A'}}>
                    <Tab.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ headerShown: false,
                                    tabBarLabel: '',
                                    tabBarIcon: ({focused}) => {
                                        return(
                                            <MaterialCommunityIcons name="home" size={24}/>
                                        )
                                    }}}
                    />
                    <Tab.Screen
                        name="Reports"
                        component={DoctorSearchScreen}
                        options={{ headerShown: false,
                                    tabBarLabel: '',
                                    tabBarIcon: ({focused}) => {
                                        return(
                                            <MaterialIcons name="search" size={24}/>
                                        )
                                    }}}
                    />
                    <Tab.Screen
                        name="New Consultation"
                        component={NewAppointmentScreen}
                        options={{ headerShown: false,
                                    tabBarLabel: '',
                                    tabBarIcon: ({focused}) => (
                                        <MaterialCommunityIcons name="calendar-plus" size={24}/>
                                    ),
                                }}
                    />
                    <Tab.Screen
                        name="Appoinment"
                        component={AppointmentScreen}
                        options={{ headerShown: false,
                                    tabBarLabel: '',
                                    tabBarIcon: ({focused}) => {
                                         return(
                                            <MaterialCommunityIcons name="calendar" size={24}/>
                                        )
                                    }}}
                    />
                    <Tab.Screen
                        name="Profile"
                        component={ProfileScreen}
                        options={{ headerShown: false,
                                    tabBarLabel: '',
                                    tabBarIcon: ({focused}) => {
                                        return(
                                            <MaterialCommunityIcons name="face-man-profile" size={24}/>
                                        )
                                    }}}
                    />
                </Tab.Navigator>
            </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});

