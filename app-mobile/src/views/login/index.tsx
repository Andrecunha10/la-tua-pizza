import { useFormik } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Container } from "../../components/Container";
import { CustomButton } from "../../components/CustomButton";
import { FormField } from "../../components/FormField";
import * as yup from 'yup';
import { loginUser } from "../../services/loginuser";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IRootStackParamList } from "../../routes";
import Toast from 'react-native-toast-message';
import { isNativeFirebaseAuthError } from "../../utils/isNativeFirebaseAuthError";

type IProps = NativeStackScreenProps<IRootStackParamList, 'Login'>

export function LoginView( { navigation }: IProps) {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object().shape({
            email: yup.string()
                .required('Informe seu e-mail.')
                .email('Informe um e-mail válido.'),
            password: yup.string()
                .required('Informe sua senha')
        }),
        onSubmit: async (values) => {
            try {
                const user = await loginUser(values)
                console.log('user', user)
                navigation.navigate('Content')
            } catch (error){
                const errorMsg = isNativeFirebaseAuthError(error) && (error.code ==='auth/user-not-found' || error.code === 'auth/wrong-password')
                ? 'Login ou senha inválidos'
                : 'Falha ao realizar login. Tente novamente em instantes.'
                Toast.show({
                    type: 'error',
                    text1: 'Algo deu errado!',
                    text2: errorMsg
                })
            }
        }
    })
    const getFieldProps = (fieldName: 'email' | 'password') => ({
        value: formik.values[fieldName],
        onChangeText: formik.handleChange(fieldName),
        onBlur: formik.handleBlur(fieldName),
        error: formik.errors[fieldName],
        isInvalid: !!formik.errors[fieldName] && formik.touched[fieldName],
        isValid: !formik.errors[fieldName] && formik.touched[fieldName]
    })
    return (
        <Container padding>
            <FormField 
                label="E-mail"
                placeholder="Informe seu e-mail de acesso"
                keyboardType="email-address"
                {...getFieldProps('email')}
            />
            <FormField 
                label="Senha"
                placeholder="Informe sua senha de acesso"
                {...getFieldProps('password')}
                secureTextEntry
            />
            <View style={styles.viewButton}>
                <CustomButton 
                    size="lg" 
                    onPress={formik.handleSubmit}
                    loading={formik.isSubmitting || formik.isValidating}
                    disabled={formik.isSubmitting || formik.isValidating}
                >Entrar</CustomButton>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    viewButton: {
        alignItems: 'center'
    }
})

