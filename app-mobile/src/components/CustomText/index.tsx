import React from "react";
import { StyleSheet, TextProps, Text } from "react-native";

type IProps = {
    weight?: 'Roboto-Black' | 'Roboto-Bold' | 'Roboto-Medium' | undefined
} & TextProps

export function CustomText ({style, weight, ...props}:IProps) {
    const styles = StyleSheet.create({
        text: {
            fontFamily: 'Roboto-Regular',
            fontSize: 16
        },
        weight:{
            fontFamily: weight,
        }
        
    })
    return <Text style={[styles.text, weight ? styles.weight : {} ,style]} {...props} />;
}

