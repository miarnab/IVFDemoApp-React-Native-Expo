import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, Stack, TextInput, Button } from "@react-native-material/core";
import { StyleSheet } from 'react-native';

export default function SecondLoginScreen({navigation}){
    const [headerText, setHeaderText] = useState('Sign in / Sign up');
    const [bodyText, setBodyText] = useState('Sign up or Sign in to access your orders,\nspecial offers, health tips and more!');
    const [versionText, setVersionText] = useState('Version - 1.0');
    const [legal, setLegal] = useState('By continuing you agree to our Terms of service \nand Privacy Legal Policy');

    return(
        <Stack style={styles.upperContainer} spacing={20}>
            <Stack m={4} spacing={4} style={styles.text}>
            <Text variant="h5">{headerText}</Text>
            <Text variant="body2">{bodyText}</Text>
            </Stack>
            <StatusBar style="auto" />
            <Stack m={4} spacing={8}>
            <TextInput label='USERNAME' variant='standard' color='lightblue' style={styles.textinput}/>
            <Button title="USE USERNAME TO LOGIN" color='lightblue' pressEffectColor='lightblue' onPress={() => navigation.navigate('UsernameLogin')}/>
            </Stack>
            <Stack style={styles.textOR}>
            <Text> - OR - </Text>
            </Stack>
            <Stack m={4} spacing={8}>
            <Button variant="outlined" title="Continue with OTP" color='lightblue' pressEffectColor='lightblue' onPress={()=> navigation.navigate('OTPLogin')}/>
            </Stack>
            <Stack style={styles.textOR}>
            <Text> Don't have an account? </Text>
            </Stack>
            <Stack m={4} spacing={8}>
            <Button variant="outlined" title="Register" color='lightblue' pressEffectColor='lightblue'onPress={()=> navigation.navigate('Register')}/>
            </Stack>
        </Stack>
    );
}

const styles = StyleSheet.create({
    upperContainer: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 30,
    },
    text: {
      textAlign: 'left',
      alignItems: 'flex-start'
    },
    textinput: {
      width: '100%',
    },
    textOR: {
      alignItems: 'center',
    }
});