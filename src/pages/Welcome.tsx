import React from 'react';
import { SafeAreaView, Text, Image, StyleSheet, TouchableOpacity, Dimensions, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import warteringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        lineHeight: 38,
        marginTop: 38,
        fontFamily: fonts.heading,
        color: colors.heading
    },
    subTitle: {
        fontSize: 17,
        lineHeight: 25,
        textAlign: 'center',
        fontFamily: fonts.complement,
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
    buttonIcon: {
        color: colors.white,
        fontSize: 32,
    }
})

export default function Welcome() {
    const navigation = useNavigation();

    function handleStart() {
        navigation.navigate('UserIdetification')

    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Gerencie {'\n'}suas plantas de {'\n'} forma fácil</Text>
                <Image source={warteringImg} style={styles.image} resizeMode="contain" />
                <Text style={styles.subTitle}>
                    Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
                    sempre que precisar.{'\n'}
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.6}
                    onPress={handleStart}
                >
                    <MaterialIcons name="chevron-right" style={styles.buttonIcon} />
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}