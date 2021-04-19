import React from 'react';
import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';
import warteringImg from '../assets/watering.png';
import {Button }from '../components/Button';
import colors from '../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 38,
        fontStyle: 'normal',
        fontFamily: 'Jost',
        color: colors.heading
    },
    subTitle: {
        fontSize: 17,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 25,
        textAlign: 'center',
        color: colors.body_dark
    },
})

export function Welcome() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Gerencie {'\n'}suas plantas de {'\n'}forma fácil</Text>
            <Image source={warteringImg} />
            <Text style={styles.subTitle}> Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
                sempre que precisar.</Text>
            <Button title='>'/>

        </SafeAreaView>
    )
}