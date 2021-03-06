import { useNavigation, useRoute } from '@react-navigation/native';
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

interface Params {
    title: string;
    subTitle: string;
    buttonTitle: string;
    icon: 'smile' | 'hug',
    nextScreen: string;
  }
  
  const emojis = {
    hug: '🤗',
    smile: '😄'
  }

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
    const navigation = useNavigation();
    const route = useRoute();

    const {
      title,
      subTitle,
      buttonTitle,
      icon,
      nextScreen
    } = route.params as Params;

    function handleMoveOn(){
        navigation.navigate(nextScreen)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    {emojis[icon]}
                </Text>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.subTitle}>
                   {subTitle}
                </Text>

                <Button title={buttonTitle} onPress={handleMoveOn}/>


            </View>

        </SafeAreaView>
    )
}