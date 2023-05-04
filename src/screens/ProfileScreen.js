import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { Text, Stack, TextInput, Button, Avatar, Surface, HStack, VStack, IconButton } from "@react-native-material/core";
import { Image, StyleSheet, View, Animated, Easing } from 'react-native';
import { ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileScreen({navigation}){
    const rotation = useRef(new Animated.Value(0)).current;
    const[showPatientDetails, setShowPatientDetails] = useState(false);

    const handlePress = () => {
        setShowPatientDetails(true);
    };

    const handleArrowRotation = () => {
        Animated.timing(rotation, {
          toValue: 90,
          easing: Easing.back(),
          duration: 200,
          useNativeDriver: true,
        }).start();
    };

    const rotateInterpolate = rotation.interpolate({
        inputRange: [0, 90],
        outputRange: ['0deg', '90deg'],
    });

    return(
        <Stack style={styles.mainContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Stack spacing={50}>
                    <Stack style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Profile Details</Text>
                    </Stack>
                    <Stack style={{ width: '100%', padding: 30, backgroundColor: 'lightblue', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, elevation: 20, shadowColor: '#52006A' }}>
                        <Stack style={{ flex: 1, flexDirection: 'row', gap: 20 }}>
                            <Image
                                source={require('../../assets/profile-image.jpg')}
                                style={{ width: 40, height: 40, borderRadius: 20 }}
                            />
                            <Stack style={{ flexDirection: 'column' }}>
                                <Text variant='caption' style={{ fontSize: 15, fontWeight: 'bold' }}>Jessica Simpson</Text>
                                <Text variant='caption' style={{ fontSize: 10 }}>Female</Text>
                            </Stack>
                        </Stack>
                    </Stack>
                    {/* <Stack style={{ width: '100%', padding: 30, backgroundColor: 'blue', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, elevation: 20, shadowColor: '#52006A' }}>
                        <Stack style={{ flexDirection: 'row', gap:20}}>
                            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>Share your{'\n'}Patient Profile</Text>
                            <Button raised elevation={20} title="Share Profile" titleStyle={{ fontSize:10 }} style={{ backgroundColor: 'lightgreen' }}/>
                        </Stack>
                    </Stack> */}
                    <Stack  spacing={10} style={{ width: '100%', alignItems: 'center', justifyContent: 'center', padding: 30, backgroundColor: '#ffffff', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, elevation: 20, shadowColor: '#52006A' }}>
                        <Stack style={{ flex: 1, flexDirection: 'row', gap: 100, height: 30 }}>
                            <Text variant='caption' style={{ fontSize: 15, fontWeight: 'bold' }}>Patient Details</Text>
                            <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
                                <MaterialIcons name='keyboard-arrow-right' size={30} onPress={handleArrowRotation} onPressIn={handlePress}/>
                            </Animated.View>
                        </Stack>
                        {showPatientDetails && (
                            <Stack spacing={10}>
                                <Stack style={{ flexDirection: 'row', gap: 130 }}>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold' }}>First Name</Text>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'green' }}>Jessica</Text>
                                </Stack>
                                <Stack style={{ flexDirection: 'row', gap: 130 }}>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Last Name</Text>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'green' }}>Simpson</Text>
                                </Stack>
                                <Stack style={{ flexDirection: 'row', gap: 65 }}>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Date of Birth</Text>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'green' }}>July 16, 1990 (30y)</Text>
                                </Stack>
                                <Stack style={{ flexDirection: 'row', gap: 170 }}>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold' }}>City</Text>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'green' }}>London</Text>
                                </Stack>
                                <Stack style={{ flexDirection: 'row', gap: 110 }}>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Country</Text>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'green' }}>United Kingdom</Text>
                                </Stack>
                                <Stack style={{ flexDirection: 'row', gap: 82 }}>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Phone Number</Text>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'green' }}>+91 12345678</Text>
                                </Stack>
                            </Stack>
                        )}
                        
                    </Stack>
                    {/* <Stack  spacing={20} style={{ width: '100%', padding: 30, backgroundColor: '#ffffff', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, elevation: 20, shadowColor: '#52006A' }}>
                        <Text variant='caption' style={{ fontSize: 15, fontWeight: 'bold' }}>Shared Profile</Text>
                        <Stack style={{ flex: 1, flexDirection: 'row', gap: 20 }}>
                            <Stack style={{ width: '40%', padding: 5, backgroundColor: 'lightblue', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, }}>
                                <Stack spacing={5} style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'blue' }}>Dec 8</Text>
                                    <Text style={{ fontSize: 8, fontWeight: 'bold', color: 'blue' }}>8:30 AM</Text>
                                </Stack>
                            </Stack>
                            <Stack style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Anna Knowalsky</Text>
                                <Text style={{ fontSize: 8, fontWeight: 'bold', color:'green' }}>7 views</Text>
                            </Stack>

                        </Stack>
                        <Stack style={{ flex: 1, flexDirection: 'row', gap: 20 }}>
                            <Stack style={{ width: '40%', padding: 5, backgroundColor: 'lightblue', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, }}>
                                <Stack spacing={5} style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'blue' }}>Dec 7</Text>
                                    <Text style={{ fontSize: 8, fontWeight: 'bold', color: 'blue' }}>8: 20 PM</Text>
                                </Stack>
                            </Stack>
                            <Stack style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Narendra Modi</Text>
                                <Text style={{ fontSize: 8, fontWeight: 'bold', color:'green' }}>3 views</Text>
                            </Stack>

                        </Stack>
                        <Stack style={{ flex: 1, flexDirection: 'row', gap: 20 }}>
                            <Stack style={{ width: '40%', padding: 5, backgroundColor: 'lightblue', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, }}>
                                <Stack spacing={5} style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'blue' }}>Dec 15</Text>
                                    <Text style={{ fontSize: 8, fontWeight: 'bold', color: 'blue' }}>1:30 PM</Text>
                                </Stack>
                            </Stack>
                            <Stack style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Donald Trump</Text>
                                <Text style={{ fontSize: 8, fontWeight: 'bold', color:'green' }}>4 views</Text>
                            </Stack>

                        </Stack>
                        <Stack style={{ flex: 1, flexDirection: 'row', gap: 20 }}>
                            <Stack style={{ width: '40%', padding: 5, backgroundColor: 'lightblue', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, }}>
                                <Stack spacing={5} style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'blue' }}>Dec 6</Text>
                                    <Text style={{ fontSize: 8, fontWeight: 'bold', color: 'blue' }}>7:45 PM</Text>
                                </Stack>
                            </Stack>
                            <Stack style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Joe Biden</Text>
                                <Text style={{ fontSize: 8, fontWeight: 'bold', color:'green' }}>11 views</Text>
                            </Stack>

                        </Stack>
                        <Stack style={{ flex: 1, flexDirection: 'row', gap: 20 }}>
                            <Stack style={{ width: '40%', padding: 5, backgroundColor: 'lightblue', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, }}>
                                <Stack spacing={5} style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'blue' }}>Dec 9</Text>
                                    <Text style={{ fontSize: 8, fontWeight: 'bold', color: 'blue' }}>4:30 AM</Text>
                                </Stack>
                            </Stack>
                            <Stack style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Barrack Obama</Text>
                                <Text style={{ fontSize: 8, fontWeight: 'bold', color:'green' }}>5 views</Text>
                            </Stack>

                        </Stack>
                    </Stack> */}
                    
                </Stack>
            </ScrollView>
        </Stack>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 40,
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'aliceblue'
    }
});