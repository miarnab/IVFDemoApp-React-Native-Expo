import React, { useState, useRef } from "react";
import { Stack, Text } from "@react-native-material/core";
import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function Container(){
    const [consultationType, setConsultationType] = useState('');

    const pickerRef = useRef();

    function open() {
        pickerRef.current.focus();
    }

    function close() {
        pickerRef.current.blur();
    }

    return(
        <Stack style={styles.container} spacing={20}>
            <Text style={styles.containerText}>Select your visit type, we will determine the appropriate choice for you</Text>
            <Stack style={styles.containerPicker}>
                <Picker
                    ref={pickerRef}
                    selectedValue={consultationType}
                    onValueChange={(itemValue, itemIndex) => 
                        setConsultationType(itemValue)
                    }
                >
                    <Picker.Item label="Polyclinic visit" value="poly visit" />
                    <Picker.Item label="Telemedicine" value="tele" />
                    <Picker.Item label="Online Consultation" value="online" />
                </Picker>
            </Stack>
        </Stack>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#ffffff',
        padding: 30,
        elevation: 20,
        shadowColor: '#52006A',
    },
    containerText: {
        flex: 1,
        textAlign: 'left',
        fontSize: 15,
    },
    containerPicker: {
        flex: 1,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#f7f7f7',
        height: 40,
        width: '100%',
        justifyContent: 'center',
        elevation: 20,
        shadowColor: '#52006A',
    },
});