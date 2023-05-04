import React from "react";
import { Stack, Text } from "@react-native-material/core";
import { StyleSheet } from "react-native";

export default function MessageScreen(){
    return(
        <Stack style={styles.container}>
            <Text>Write a Message!</Text>
        </Stack>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "lightblue"
    }
});