import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
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
    const [userName, setUserName] = useState<string>();
    useEffect(()=>{
        async function loadStorage(){
            const user = await AsyncStorage.getItem('@plantmanager:user');

            setUserName(user || '')
        }
        loadStorage();
    })
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.gretting}>Olá, </Text>
                <Text style={styles.userName}>{userName} </Text>
            </View>
            <Image source={userImg} style={styles.image} />
        </View>

    )
}