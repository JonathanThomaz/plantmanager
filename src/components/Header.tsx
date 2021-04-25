import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { color } from 'react-native-reanimated';
import userImg from '../assets/jonathan.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: getStatusBarHeight(),
    },
    gretting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 40,
    },
    image: {
        width: 56,
        height: 56,
        borderRadius: 28,
    },
})

export function Header() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.gretting}>Olá, </Text>
                <Text style={styles.userName}>Jonathan </Text>
            </View>
            <Image source={userImg} style={styles.image} />
        </View>

    )
}