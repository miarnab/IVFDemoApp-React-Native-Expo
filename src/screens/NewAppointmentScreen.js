import React, { useRef, useState } from "react";
import { Button, Stack, Text, TextInput } from "@react-native-material/core";
import { FlatList, ScrollView, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import NewAppointmentUpperContainer from "../compenents/NewAppointmentUpperContainer";
import NewAppointmentLowerContainer from "../compenents/NewAppointmentLowerContainer";


export default function NewAppointmentScreen(){
    return(
        <Stack style={styles.container} spacing={50}>
            <Text style={styles.heading}>Create New Appointment</Text>
            <Stack>
                <NewAppointmentUpperContainer></NewAppointmentUpperContainer>
            </Stack>
            <Stack>
                <NewAppointmentLowerContainer></NewAppointmentLowerContainer>
            </Stack>
        </Stack>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "aliceblue",
        padding: 50
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 15,
    },
});

