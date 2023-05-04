import React from "react";
import { Stack, Text, Surface, Button } from "@react-native-material/core";
import { StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function AppointmentScreen(){
    const navigation = useNavigation();

    return(
        <Stack style={styles.container} spacing={20}>
            <Text variant="caption" style={styles.heading}>Appoinment</Text>
            <Stack style={styles.subHeadingContainer}>
                <Stack style={styles.appointmentsSurface}>
                    <Surface
                        elevation={2}
                        category="medium"
                        style={{ width: 80, height: 80 }}
                    ><Text style={{ textAlign: 'center' }}>2{'\n'}{'\n'}Today</Text>
                    </Surface>
                    <Surface
                        elevation={2}
                        category="medium"
                        style={{ width: 80, height: 80 }}
                    ><Text style={{ textAlign: 'center' }}>6{'\n'}{'\n'}Total</Text>
                    </Surface>
                    <Surface
                        elevation={2}
                        category="medium"
                        style={{ width: 80, height: 80 }}
                    ><Text style={{ textAlign: 'center' }}>1{'\n'}{'\n'}Cancelled</Text>
                    </Surface>
                    <Surface
                        elevation={2}
                        category="medium"
                        style={{ width: 80, height: 80 }}
                    ><Text style={{ textAlign: 'center' }}>0{'\n'}{'\n'}Upcoming</Text>
                    </Surface>
                </Stack>
                <Stack>
                    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('NewAppointment')}>
                        <Text>+</Text>
                    </TouchableOpacity>
                </Stack>
            </Stack>
        </Stack>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "lightblue",
        padding: 70
    },
    heading: {
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontSize: 15,
    },
    appointmentsSurface: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    subHeadingContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        backgroundColor: 'lightgreen',
        height: 60,
        width: 60,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    }
});