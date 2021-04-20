import React from 'react';
import { SafeAreaView, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import warteringImg from '../assets/watering.png';
import colors from '../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
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
    image: {
        height: Dimensions.get('window').width * 0.7
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
    },
    buttonTitle: {
        color: colors.white,
        fontSize: 24,
    }
})

export function Welcome() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Gerencie {'\n'}suas plantas de {'\n'}forma fácil</Text>
            <Image source={warteringImg} style={styles.image} resizeMode="contain"/>
            <Text style={styles.subTitle}> Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
                sempre que precisar.</Text>
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.6}
            >
                <Text style={styles.buttonTitle}>
                    {'>'}
                </Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}