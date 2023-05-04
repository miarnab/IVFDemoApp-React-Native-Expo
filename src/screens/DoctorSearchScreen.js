import React, { useState, useRef } from "react";
import { Button, Stack, Text } from "@react-native-material/core";
import { Image, ScrollView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { View } from "react-native";

export default function DoctorSearchScreen(){
    const[speciality, setSpeciality] = useState('');
    const[location, setLocation] = useState('');
    const[availability, setAvailability] = useState('');

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <Stack spacing={40} style={styles.container}>
                <Stack style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={styles.header}>Search Doctor</Text>
                    <Stack style={{ left: 140, top: 20 }}>
                            <MaterialIcons name="cancel" size={24}/>
                    </Stack>
                </Stack>
                <Stack spacing={10}>
                    <TouchableOpacity style={styles.picker}>
                        <Stack style={{ flex: 1, flexDirection: 'row', gap: 10 }}>
                            <Stack style={styles.pickerIcons}>
                                <MaterialIcons name="search" size={20} style={{ color: 'lightblue' }}/>
                            </Stack>
                            <Stack style={{ flex: 1, flexDirection: 'column' }}>
                                <Text variant="caption">Speciality</Text>
                                <Text variant="caption" style={{ fontSize: 15, fontWeight: 'bold' }}>All Speciality</Text>
                            </Stack>
                        </Stack>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.picker}>
                        <Stack style={{ flex: 1, flexDirection: 'row', gap: 10 }}>
                            <Stack style={styles.pickerIcons}>
                                <Ionicons name="md-location-outline" size={20} style={{ color: 'lightblue' }}/>
                            </Stack>
                            <Stack style={{ flex: 1, flexDirection: 'column' }}>
                                <Text variant="caption">Location</Text>
                                <Text variant="caption" style={{ fontSize: 15, fontWeight: 'bold' }}>New York, NY, USA</Text>
                            </Stack>
                        </Stack>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.picker}>
                        <Stack style={{ flex: 1, flexDirection: 'row', gap: 10 }}>
                            <Stack style={styles.pickerIcons}>
                                <Ionicons name="md-calendar-outline" size={20} style={{ color: 'lightblue' }}/>
                            </Stack>
                            <Stack style={{ flex: 1, flexDirection: 'column' }}>
                                <Text variant="caption">Availability</Text>
                                <Text variant="caption" style={{ fontSize: 15, fontWeight: 'bold' }}>Today, 26 Nov</Text>
                            </Stack>
                        </Stack>
                    </TouchableOpacity>
                </Stack>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Find Doctor</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton}>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <Stack style={styles.lowerContainer} spacing={20}>
                    <Text style={styles.lowerContainerHeaderText}>Nearby Doctors</Text>
                    <Stack style={styles.lowerContainerCards}>
                        <Image
                            source={require('../../assets/profile-image.jpg')}
                            style={{ width: 40, height: 40, borderRadius: 20 }}
                        />
                        <Stack style={{ flex: 1, flexDirection: 'column', gap: 5 }}>
                            <Text variant="caption" style={styles.cardUpperText}>Dr. Leonard Campbell</Text>
                            <Text variant="caption" style={styles.cardLowerText}>Cardiologist - 6 years of exp.</Text>
                        </Stack>
                    </Stack>
                    <Stack style={styles.lowerContainerCards}>
                        <Image
                            source={require('../../assets/profile-image.jpg')}
                            style={{ width: 40, height: 40, borderRadius: 20 }}
                        />
                        <Stack style={{ flex: 1, flexDirection: 'column', gap: 5 }}>
                            <Text variant="caption" style={styles.cardUpperText}>Dr. Leonard Campbell</Text>
                            <Text variant="caption" style={styles.cardLowerText}>Cardiologist - 6 years of exp.</Text>
                        </Stack>
                    </Stack>
                    <Stack style={styles.lowerContainerCards}>
                        <Image
                            source={require('../../assets/profile-image.jpg')}
                            style={{ width: 40, height: 40, borderRadius: 20 }}
                        />
                        <Stack style={{ flex: 1, flexDirection: 'column', gap: 5 }}>
                            <Text variant="caption" style={styles.cardUpperText}>Dr. Leonard Campbell</Text>
                            <Text variant="caption" style={styles.cardLowerText}>Cardiologist - 6 years of exp.</Text>
                        </Stack>
                    </Stack>
                    <Stack style={styles.lowerContainerCards}>
                        <Image
                            source={require('../../assets/profile-image.jpg')}
                            style={{ width: 40, height: 40, borderRadius: 20 }}
                        />
                        <Stack style={{ flex: 1, flexDirection: 'column', gap: 5 }}>
                            <Text variant="caption" style={styles.cardUpperText}>Dr. Leonard Campbell</Text>
                            <Text variant="caption" style={styles.cardLowerText}>Cardiologist - 6 years of exp.</Text>
                        </Stack>
                    </Stack>
                    <Stack style={styles.lowerContainerCards}>
                        <Image
                            source={require('../../assets/profile-image.jpg')}
                            style={{ width: 40, height: 40, borderRadius: 20 }}
                        />
                        <Stack style={{ flex: 1, flexDirection: 'column', gap: 5 }}>
                            <Text variant="caption" style={styles.cardUpperText}>Dr. Leonard Campbell</Text>
                            <Text variant="caption" style={styles.cardLowerText}>Cardiologist - 6 years of exp.</Text>
                        </Stack>
                    </Stack>
                    <Stack style={{ height: 30}}/>
                </Stack>
            </Stack>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: 'aliceblue'
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        top: 20,
    },
    button: {
        borderRadius: 20,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        elevation: 30,
        shadowColor: '#52006A'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    cancelButton: {
        borderRadius: 20,
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    cancelButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'blue'
    },
    lowerContainer:{
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#f5f5f5',
        elevation: 30,
        shadowColor: '#52006A',
        width: '112%',
        right: 20,
    },
    lowerContainerHeaderText: {
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    lowerContainerCards: {
        padding: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#ffffff',
        width: '90%',
        right: 14,
        left: 16,
        flex: 1,
        flexDirection: 'row',
        gap: 10,
        elevation: 30,
        shadowColor: '#52006A',
    },
    cardUpperText: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    cardLowerText: {
        fontSize: 10,
        fontWeight: '500'
    },
    picker: {
        flex: 1,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#ffffff',
        height: 60,
        width: '100%',
        justifyContent: 'center',
        elevation: 10,
        shadowColor: '#52006A',
        borderColor: 'lightblue',
        borderWidth: 2,
        padding: 10,
    },
    pickerIcons: {
        height: 30,
        width: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        top: 3
    }
});