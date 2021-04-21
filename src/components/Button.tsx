import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 231,
    },
    buttonTitle: {
        color: colors.white,
        fontSize: 24,
        fontFamily: fonts.complement,
    }
})
export function Button({ title, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            {...rest}
        >
            <Text style={styles.buttonTitle}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}