import { Button, Stack, Text } from "@react-native-material/core";
import React, { useState, useRef } from "react";
import { Image, ScrollView, TouchableOpacity, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function HomeScreen(){
    const [showEnquiriesScrollView, setShowEnquiriesScrollView] = useState(false);
    const [showReportsScrollView, setShowReportsScrollView] = useState(false);
    const [showReportType, setShowReportType] = useState('');

    const handleEnquiriesPress = () => {
        setShowEnquiriesScrollView(true);
    }

    const handleReportsPress = () => {
        setShowReportsScrollView(true);
    }

    const pickerRef = useRef();

    function open() {
        pickerRef.current.focus();
    }

    function close() {
        pickerRef.current.blur();
    }

    return(
        <Stack>

            <ScrollView showsVerticalScrollIndicator={false}>
                
                <Stack style={styles.container} spacing={20}>
                    <Stack style={{ flexDirection: 'row', gap: 50 }}>
                        <Text style={styles.appointmentText}>Upcoming Appointments</Text>
                        <Text style={styles.seeAllText}>See All</Text>
                    </Stack>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Stack style={{ flexDirection:'row', gap: 20 }}>
                            <Stack style={styles.firstCard}>
                                <Stack style={{ flexDirection: 'column' }}>
                                    <Stack style={{ flexDirection: 'row', gap: 40, padding: 20}}>
                                        <Text style={{ color: 'white' }}>Image</Text>
                                        <Stack style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                                            <Text style={{ color: 'white' }}>5:45 PM</Text>
                                            <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>Dec 7</Text>
                                        </Stack>
                                    </Stack>
                                    <Stack style={{ padding: 20 }}>
                                        <Text variant="body1" style={{ color: 'white' }}>Michael{'\n'}Simpson</Text>
                                    </Stack>
                                    <Stack style={{ padding: 20 }}>
                                        <Button title="Join the Call" style={styles.firstCardButton}/>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Stack style={styles.eachCard}>
                                <Stack style={{ flexDirection: 'column' }}>
                                    <Stack style={{ flexDirection: 'row', gap: 40, padding: 20}}>
                                        <Text style={{ color: 'white' }}>Image</Text>
                                        <Stack style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                                            <Text style={{ color: 'green' }}>8:30 AM</Text>
                                            <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>Dec 7</Text>
                                        </Stack>
                                    </Stack>
                                    <Stack style={{ padding: 20 }}>
                                        <Text variant="body1" style={{ color: 'black' }}>Kate{'\n'}Brown</Text>
                                    </Stack>
                                    <Stack style={{ padding: 20 }}>
                                        <Button title="Wait for Call" color="#f7f7f7" style={styles.eachCardButton}/>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Stack style={styles.eachCard}>
                                <Stack style={{ flexDirection: 'column' }}>
                                    <Stack style={{ flexDirection: 'row', gap: 40, padding: 20}}>
                                        <Text style={{ color: 'white' }}>Image</Text>
                                        <Stack style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                                            <Text style={{ color: 'green' }}>2:00 PM</Text>
                                            <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>Dec 7</Text>
                                        </Stack>
                                    </Stack>
                                    <Stack style={{ padding: 20 }}>
                                        <Text variant="body1" style={{ color: 'black' }}>Peter{'\n'}Anderson</Text>
                                    </Stack>
                                    <Stack style={{ padding: 20 }}>
                                        <Button title="Wait for Call" color="#f7f7f7" style={styles.eachCardButton}/>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Stack style={styles.eachCard}>
                                <Stack style={{ flexDirection: 'column' }}>
                                    <Stack style={{ flexDirection: 'row', gap: 40, padding: 20}}>
                                        <Text style={{ color: 'white' }}>Image</Text>
                                        <Stack style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                                            <Text style={{ color: 'green' }}>9:30 PM</Text>
                                            <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>Dec 7</Text>
                                        </Stack>
                                    </Stack>
                                    <Stack style={{ padding: 20 }}>
                                        <Text variant="body1" style={{ color: 'black' }}>Barrack{'\n'}Obama</Text>
                                    </Stack>
                                    <Stack style={{ padding: 20 }}>
                                        <Button title="Wait for Call" color="#f7f7f7" style={styles.eachCardButton}/>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Stack style={styles.eachCard}>
                                <Stack style={{ flexDirection: 'column' }}>
                                    <Stack style={{ flexDirection: 'row', gap: 40, padding: 20}}>
                                        <Text style={{ color: 'white' }}>Image</Text>
                                        <Stack style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                                            <Text variant="caption" style={{ color: 'green', fontWeight: 'bold' }}>11:00 AM</Text>
                                            <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>Dec 7</Text>
                                        </Stack>
                                    </Stack>
                                    <Stack style={{ padding: 20 }}>
                                        <Text variant="body1" style={{ color: 'black' }}>Joe{'\n'}Biden</Text>
                                    </Stack>
                                    <Stack style={{ padding: 20 }}>
                                        <Button style={styles.eachCardButton} title="Wait for Call" color="#f7f7f7"/>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </ScrollView>
                    <Stack style={styles.selectionContainer}>
                        <Stack>
                            <Pressable
                                onPress={handleEnquiriesPress}
                                style={({ pressed }) => [{ backgroundColor: pressed ? 'blue' : 'lightblue' }, styles.btn ]}>
                                {({ pressed }) => (
                                    <Text style={[{ color: pressed ? 'white' : 'black' }, styles.btnText]}>
                                        Last Enquiries
                                    </Text>
                                )}
                            </Pressable>
                        </Stack>
                        <Stack>
                            <Pressable
                                onPress={handleReportsPress}
                                style={({ pressed }) => [{ backgroundColor: pressed ? 'blue' : 'lightblue' }, styles.btn ]}>
                                {({ pressed }) => (
                                    <Text style={[{ color: pressed ? 'white' : 'black' }, styles.btnText]}>
                                        Reports
                                    </Text>
                                )}
                            </Pressable>
                        </Stack>
                    </Stack>
                    <Stack style={styles.enquiriesContainer}>
                        {showEnquiriesScrollView && (
                            <ScrollView>
                                <Stack spacing={30}>
                                    <Stack style={{ flexDirection: 'row', gap: 5 }}>
                                        <Text>Image</Text>
                                        <Stack style={{ flexDirection: 'column' }}>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Anna Kowalsky</Text>
                                            <Text style={{ fontSize: 10 }}>Video Consultation</Text>
                                        </Stack>
                                    </Stack>
                                    <Stack style={{ flexDirection: 'row', gap: 5 }}>
                                        <Text>Image</Text>
                                        <Stack style={{ flexDirection: 'column' }}>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Barrack Obama</Text>
                                            <Text style={{ fontSize: 10 }}>Clinic Consultation</Text>
                                        </Stack>
                                    </Stack>
                                    <Stack style={{ flexDirection: 'row', gap: 5 }}>
                                        <Text>Image</Text>
                                        <Stack style={{ flexDirection: 'column' }}>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Joe Biden</Text>
                                            <Text style={{ fontSize: 10 }}>Telemedicine</Text>
                                        </Stack>
                                    </Stack>
                                    <Stack style={{ flexDirection: 'row', gap: 5 }}>
                                        <Text>Image</Text>
                                        <Stack style={{ flexDirection: 'column' }}>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Anna Kowalsky</Text>
                                            <Text style={{ fontSize: 10 }}>Telemedicine</Text>
                                        </Stack>
                                    </Stack>
                                    <Stack style={{ flexDirection: 'row', gap: 5 }}>
                                        <Text>Image</Text>
                                        <Stack style={{ flexDirection: 'column' }}>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Rishi Sunak</Text>
                                            <Text style={{ fontSize: 10 }}>Video Consultation</Text>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </ScrollView>
                        )}
                    </Stack>
                    <Stack style={styles.reportsContainer}>
                        {showReportsScrollView && (
                            <ScrollView>
                                <Stack>
                                    <Text>Report 1</Text>
                                    <Stack style={styles.reportsActionPicker}>
                                        <Picker
                                            ref={pickerRef}
                                            selectedValue={showReportType}
                                            onValueChange={(itemValue, itemIndex) => 
                                                setShowReportType(itemValue)
                                            }
                                        >
                                            <Picker.Item label="Download as PDF" value="pdf" />
                                            <Picker.Item label="View in App" value="app" />
                                        </Picker>
                                    </Stack>
                                    <Text>Report 2</Text>
                                    <Stack style={styles.reportsActionPicker}>
                                        <Picker
                                            ref={pickerRef}
                                            selectedValue={showReportType}
                                            onValueChange={(itemValue, itemIndex) => 
                                                setShowReportType(itemValue)
                                            }
                                        >
                                            <Picker.Item label="Download as PDF" value="pdf" />
                                            <Picker.Item label="View in App" value="app" />
                                        </Picker>
                                    </Stack>
                                    <Text>Report 3</Text>
                                    <Stack style={styles.reportsActionPicker}>
                                        <Picker
                                            ref={pickerRef}
                                            selectedValue={showReportType}
                                            onValueChange={(itemValue, itemIndex) => 
                                                setShowReportType(itemValue)
                                            }
                                        >
                                            <Picker.Item label="Download as PDF" value="pdf" />
                                            <Picker.Item label="View in App" value="app" />
                                        </Picker>
                                    </Stack>
                                    <Text>Report 4</Text>
                                    <Stack style={styles.reportsActionPicker}>
                                        <Picker
                                            ref={pickerRef}
                                            selectedValue={showReportType}
                                            onValueChange={(itemValue, itemIndex) => 
                                                setShowReportType(itemValue)
                                            }
                                        >
                                            <Picker.Item label="Download as PDF" value="pdf" />
                                            <Picker.Item label="View in App" value="app" />
                                        </Picker>
                                    </Stack>
                                    <Text>Report 5</Text>
                                    <Stack style={styles.reportsActionPicker}>
                                        <Picker
                                            ref={pickerRef}
                                            selectedValue={showReportType}
                                            onValueChange={(itemValue, itemIndex) => 
                                                setShowReportType(itemValue)
                                            }
                                        >
                                            <Picker.Item label="Download as PDF" value="pdf" />
                                            <Picker.Item label="View in App" value="app" />
                                        </Picker>
                                    </Stack>
                                </Stack>
                                
                            </ScrollView>
                        )}
                    </Stack>
                </Stack>
            </ScrollView>
        </Stack>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "aliceblue",
        padding: 50,
    },
    appointmentText: {
        fontSize: 15,
        fontWeight: 'bold',
        left: 0,
    },
    seeAllText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    firstCard: {
        backgroundColor: 'blue',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    firstCardButton:{
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 20,
        shadowColor: '#52006A'
    },
    eachCard: {
        backgroundColor: 'aliceblue',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    eachCardButton:{
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 20,
        shadowColor: '#52006A'
    },
    selectionContainer: {
        flexDirection: 'row',
        gap: 50,
        padding: 30,
        backgroundColor: 'aliceblue',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        elevation: 20,
        shadowColor: '#52006A',
    },
    enquiriesContainer: {
        backgroundColor: '#ffffff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 30,
        elevation: 20,
        shadowColor: '#52006A',
    },
    reportsContainer: {
        backgroundColor: '#ffffff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 30,
        elevation: 20,
        shadowColor: '#52006A',
    },
    reportsActionPicker: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#f7f7f7'
    },
});