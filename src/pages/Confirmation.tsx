import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text
} from 'react-native';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
    content: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,

    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        lineHeight: 32,
        marginTop: 20,
        fontFamily: fonts.heading,
        color: colors.heading
    },
    subTitle: {
        fontSize: 17,
        lineHeight: 25,
        textAlign: 'center',
        fontFamily: fonts.complement,
        color: colors.body_dark,
        paddingBottom: 20,
    },
    emoji: {
        fontSize: 96,
    },
});

export default function Confirmation() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    😁
                </Text>
                <Text style={styles.title}>
                    Prontinho
                </Text>
                <Text style={styles.subTitle}>
                    Agora vamos começar a cuidar das suas {'\n'}plantinhas com muito cuidado.
                </Text>

                <Button title="Começar" />


            </View>

        </SafeAreaView>
    )
}