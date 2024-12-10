import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const AboutMeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>О Себе</Text>
            <Text>Ваше имя</Text>
            <Text>Ваш возраст</Text>
            <Text>Ваши интересы</Text>
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
        marginBottom: 16,
    },
})

export default AboutMeScreen