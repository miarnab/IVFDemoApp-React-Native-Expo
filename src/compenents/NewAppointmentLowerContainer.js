import React, { useState, useRef } from "react";
import { Stack, Text, TextInput } from "@react-native-material/core";
import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function NewAppointmentLowerContainer(){
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [consultationType, setConsultationType] = useState('');

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    const pickerRef = useRef();

    function open() {
        pickerRef.current.focus();
    }

    function close() {
        pickerRef.current.blur();
    }

    return(
        <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
            <Stack spacing={20}>
                <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Select your polyclinic</Text>
                <Stack style={styles.containerPolyclinicPicker}>
                    <Picker
                        ref={pickerRef}
                        selectedValue={consultationType}
                        onValueChange={(itemValue, itemIndex) => 
                            setConsultationType(itemValue)
                        }
                    >
                        <Picker.Item label="Anesthesiology" value="poly visit" />
                        <Picker.Item label="Cardiology" value="tele" />
                        <Picker.Item label="ENT" value="online" />
                    </Picker>
                </Stack>
                <Stack style={styles.containerTextRow}>
                    <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Select your preffered doctor</Text>
                    <Text style={{ fontSize: 10, fontWeight: 'bold' }}>See all</Text>
                </Stack>
                <Stack style={styles.containerDoctorPicker}>
                    <Picker
                        ref={pickerRef}
                        selectedValue={consultationType}
                        onValueChange={(itemValue, itemIndex) => 
                            setConsultationType(itemValue)
                        }
                    >
                        <Picker.Item label="Dr. Arindam Panja MD, MBBS" value="poly visit" />
                        <Picker.Item label="Dr. Subhro Banerjee MD" value="tele" />
                        <Picker.Item label="Dr. Biswanath Sengupta MD" value="online" />
                    </Picker>
                </Stack>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
                <TouchableOpacity onPress={showDatePicker} style={styles.datePicker}>
                    <TextInput placeholder="Select your date and time" editable={false}/>
                </TouchableOpacity>
                <TextInput
                    style={styles.inputComplaint}
                    placeholder="Insert or tell your initial complaint"
                />
                    
            </Stack>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container: {
        width: '100%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#ffffff',
        padding: 30,
        elevation: 20,
        shadowColor: '#52006A'
    },
    containerPolyclinicPicker: {
        flex: 1,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#f7f7f7',
        height: 40,
        width: '100%',
        justifyContent: 'center',
        elevation: 10,
        shadowColor: '#52006A',
    },
    containerTextRow: {
        flex: 1,
        flexDirection: 'row',
        gap: 40
    },
    containerDoctorPicker: {
        flex: 1,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#f7f7f7',
        height: 40,
        width: '100%',
        justifyContent: 'center',
        elevation: 10,
        shadowColor: '#52006A',
    },
    datePicker: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        height: 40,
        width: '100%',
        justifyContent: 'center',
        margin: 2,
    },
    inputComplaint: {
        border: 2,
        borderColor: 'grey',
    }
});