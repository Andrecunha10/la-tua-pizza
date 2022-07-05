import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";

type IProps = {
    children: React.ReactNode
    padding?: boolean
    center? : boolean
} & ViewProps

export function Container( { children, padding = false, center = false, ...otherProps }: IProps) {
    return (
        <View style={[style.container, padding ? style.padding : {}, center ? style.center : {}]} {...otherProps}>
            {children}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    padding: {
        padding: 16
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})