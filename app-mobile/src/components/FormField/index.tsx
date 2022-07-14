import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { CustomText } from "../CustomText";

type Iprops = {
    label: string
    error?: string
    isInvalid?: boolean
    isValid?: boolean
    editable?: boolean
} & TextInputProps

export function FormField( { 
    label,
    error,
    isInvalid = false,
    isValid = false,
    editable = true,
    ...otherProps 
}:Iprops ) {
    return (
        <View style={styles.view}>
            <CustomText style={styles.label} {...otherProps}>{label}</CustomText>
            <TextInput 
                style={[styles.input, isInvalid? styles.isInvalid : {}, isValid ? styles.isValid : {}, editable ? {} : styles.disabled]}
                {...otherProps}
                editable={editable}
            />
            {isInvalid && error && 
                <CustomText style={styles.error}>{error}</CustomText>
            }
        </View>
        
    )
}

const styles = StyleSheet.create({
    view: {
        marginBottom: 16
    },
    input: {
        borderColor: '#CED4DA',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 4,
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        paddingHorizontal: 10 
    },
    label: {
        color: "#333",
        fontSize: 16,
        marginBottom: 5
    },
    error: {
        color: '#dc3545',
        marginTop: 5
    },
    isInvalid: {
        borderColor: '#dc3545',
    },
    isValid: {
        borderColor: '#12b066'
    },
    disabled: {
        borderColor: '#555',
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: '#CED4DA'
    }
})