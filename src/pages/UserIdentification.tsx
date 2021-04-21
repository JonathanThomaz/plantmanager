import React from 'react';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-around'
    },
    wrapper: {
        flex: 1,
        width: '100%',
    },
    form: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 54,
    },
    header: {
        width: '100%',
        alignItems: 'center',
    },
    emoji: {
        fontSize: 40,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        lineHeight: 32,
        marginTop: 20,
        fontFamily: fonts.heading,
        color: colors.heading
    },
    input: {
        borderBottomWidth: 1,
        fontFamily: fonts.complement,
        fontSize: 17,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        padding: 10,
        marginBottom: 40,
        textAlign: 'center',
    }

});
export default function UserIdentification() {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    function handleInputBlur() {
        setIsFocused(false)
        setIsFilled(!!name);
    };
    function handleInputFocus() {
        setIsFocused(true)
    };
    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setName(value);
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.wrapper}>
                    <View style={styles.form}>
                        <View style={styles.header}>

                            <Text style={styles.emoji}>
                                {isFilled ?'😄' :  '😃'}
                            </Text>
                            <Text style={styles.title}>
                                Como podemos{'\n'}
                                chamar você?
                            </Text>
                            <TextInput
                                placeholder='Digite um nome'
                                style={[
                                    styles.input,
                                    (isFocused || isFilled) && { borderColor: colors.green }
                                ]}
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                            />
                            <Button
                                title="Confirmar"
                                disabled
                            />
                        </View>

                    </View>

                </View>
            </KeyboardAvoidingView>


        </SafeAreaView>
    )
}