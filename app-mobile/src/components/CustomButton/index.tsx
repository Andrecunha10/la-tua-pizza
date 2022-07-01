import React, { Children } from "react";
import { ActivityIndicator, StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { CustomText } from "../CustomText";

type IProps = {
    variant?: 'red' | 'white'
    size?: 'lg' | 'sm'
    loading?: boolean
} & TouchableOpacityProps

export function CustomButton ({ 
    children,
    variant = 'red', 
    size = 'sm',
    loading = false,
    disabled = false, 
    ...otherProps
}: IProps) {
    return (
        <TouchableOpacity 
            {...otherProps} 
            disabled={disabled}
            style={[
                styles.base, 
                styles[variant], 
                size==='lg' ? styles.lg : styles.sm,
                disabled ? styles[`disabled${variant}`] : {}
        ]}>
            {loading && (
                <ActivityIndicator 
                    style={styles.loading}
                    
                    color={variant==="white" ? "#CF3031" : "#fff"}
                    size={size==="lg" ? 'large' : 'small'}
                />
            )}             
            <CustomText style={[variant==='red' ? {color: '#fff'} : {color: '#CF3031'}]}>
                {children}
            </CustomText>
        </TouchableOpacity>)
}

const styles = StyleSheet.create({
    base: {
        borderStyle: "solid",
        borderWidth: 1,
        flexDirection: 'row', 
        justifyContent: 'center',        
    },
    lg: {
        borderRadius: 25,
        paddingHorizontal: 50,
        paddingVertical: 12,
    },
    sm: {
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    white:{
        backgroundColor: '#fff',
        borderColor: '#CF3031',
    },
    disabledwhite: {
        backgroundColor: '#ddd',
    },
    red: {
        backgroundColor: '#CF3031' ,
        borderColor: '#CF3031',
    },
    disabledred: {
        backgroundColor: '#bb4848'
    },
    loading: {
        marginEnd: 16
    }
})