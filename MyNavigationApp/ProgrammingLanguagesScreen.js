import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const ProgrammingLanguagesScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Мои языки программирования</Text>
            <Text>JavaScript</Text>
            <Text>Python</Text>
            <Text>Java</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
})

export default ProgrammingLanguagesScreen