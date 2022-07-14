import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, Switch, View } from "react-native";
import { IProduct } from "../../entities/product";
import { IUser } from "../../entities/user";
import { CustomButton } from "../CustomButton";
import { CustomText } from "../CustomText";
import { FormField } from "../FormField";
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { IAddress } from "../../entities/address";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

type IProps = {
    title: string
    user: IUser
    cart: IProduct
    button: string
}

export function CalculateShipping ( { title, user, cart, button }:IProps ) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
        setAdress(undefined)
    };
    const [adress, setAdress] = useState<IAddress | any>()
    const navigate = useNavigation()
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            name: user.firstName,
            phone: user.phone,
            
        },
        validationSchema: yup.object().shape({
            name: yup.string()
                .required('Precisa Informar seu nome'),
            phone: yup.string()
                .required('Informe seu telefone'),
            address: yup.object()
                .typeError('Selecione um endereço na lista.')
        }),
        onSubmit: async (values) => {
                const estimate = {
                    name: values.name,
                    phone: values.phone,
                    adress: adress || user.address
                }
                console.log(estimate)
        }
    })
    const getFieldProps = (fieldName: 'name' | 'phone') => ({
        value: formik.values[fieldName],
        onChangeText: formik.handleChange(fieldName),
        onBlur: formik.handleBlur(fieldName),
        error: formik.errors[fieldName],
    })
    return (
        <View>
            <CustomText style={style.title}>{title}</CustomText>
            <FormField 
                label="Nome"
                placeholder='Seu Nome'
                {...getFieldProps('name')}
            />
            <FormField 
                label="Telefone"
                placeholder='Seu Telefone'
                {...getFieldProps('phone')}
            />
            <FormField 
                label="Endereço"
                placeholder='Seu Endereço'
                value={user.address?.address}
                editable={false}
                style={isEnabled ? style.displayNone : {}}
            />
            <ScrollView keyboardShouldPersistTaps={"handled"}>
                <CustomText style={[{marginBottom: 5}, isEnabled ? {} : style.displayNone ]}>Endereço</CustomText>
                {isEnabled ? (
                    <GooglePlacesAutocomplete
                    GooglePlacesDetailsQuery={{ fields: "geometry" }}
                    fetchDetails={true}
                    placeholder="Informe um endereço"
                    query={{
                        key: 'AIzaSyALlCd2X12quqEOjlH2Dqj98vIMvuWVxAQ',
                        language: 'pt-BR',
                        components: 'country:br',
                    }}
                    onPress={(data, details = null) => {
                        setAdress({
                            lat: details?.geometry?.location.lat,
                            lng: details?.geometry?.location.lng,
                            address: data.description
                        })
                    }}
                    styles={{
                        textInputContainer: {
                          borderColor: '#CED4DA',
                          borderWidth: 1,
                          borderRadius: 4,
                        },
                        textInput: {
                          height: 38,
                          color: '#333',
                          fontSize: 16,
                        },
                        listView:{
                            height: 100,
                        }
                      }}
                      enablePoweredByContainer={false}
                />
                ) : (
                    <></>
                )}
                
            </ScrollView>
            <Switch
                trackColor={{ false: "#767577", true: "#333" }}
                thumbColor={isEnabled ? "#CF3031" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            <CustomText weight="Roboto-Black" style={style.subtotal}>Subtotal: <CustomText weight="Roboto-Black" style={style.subtotalValue} >R$ {cart.price.toFixed(2).replace('.', ',')}</CustomText></CustomText>
            <View style={style.buttonWrap}>
                <View style={{flex: 1, marginEnd: 16}}>
                    <CustomButton variant="white" onPress={() => navigate.goBack()}>Voltar</CustomButton>
                </View>
                <View style={{flex: 1, marginStart: 16}}>
                    <CustomButton onPress={formik.handleSubmit}>{button}</CustomButton>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    title: {
        fontSize: 20,
        width: '100%',
        borderBottomColor: '#9f9f9f',
        borderBottomWidth: 1,
        marginBottom: 16
    },
    subtotalValue: {
        color: '#CF3031'
    },
    subtotal:{
        textAlign: 'right',
        marginBottom: 16
    },
    buttonWrap: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    displayNone: {
        display: 'none'
    }
})