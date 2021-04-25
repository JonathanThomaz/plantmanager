import React from 'react';
import { StyleSheet, Text, } from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnvironmentButtonProps extends RectButtonProperties {
    title: string;
    active?: boolean;
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.shape,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginHorizontal: 5,
        height: 40,
        width: 76,
    },
    buttonActive: {
        backgroundColor: colors.green,
    },
    buttonTitle: {
        color: colors.heading,
        fontSize: 13,
        textAlign: 'center',
        fontFamily: fonts.complement,
    },
    buttonTitleActive: {
        color: colors.green_dark,
        fontFamily: fonts.heading,
    }
})
export function EnvironmentButton({ title, active = false, ...rest }: EnvironmentButtonProps) {
    return (
        <RectButton
            style={[
                styles.button,
                active && styles.buttonActive
            ]}
            {...rest}
        >
            <Text
                style={[
                    styles.buttonTitle,
                    active && styles.buttonTitleActive
                ]}
            >
                {title}
            </Text>
        </RectButton>
    )
}