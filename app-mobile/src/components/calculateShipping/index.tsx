import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Switch, View } from "react-native";
import { CustomButton } from "../CustomButton";
import { CustomText } from "../CustomText";
import { FormField } from "../FormField";
import * as yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { IAddress } from "../../entities/address";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { selectUser } from "../../store/slices/userslices";
import { Container } from "../Container";
import { selectCart } from "../../store/slices/cartslices";
import { setCurrentEstimate } from "../../store/slices/estimateslice";
import { GoogleAPIKey } from "../../services/configure";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IRootStackParamList } from "../../routes";


export function CalculateShipping() {
    const user = useSelector(selectUser)
    const cart = useSelector(selectCart)
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
        setAdress(undefined)
    };
    const [adress, setAdress] = useState<IAddress>()
    const navigate = useNavigation<NativeStackNavigationProp<IRootStackParamList>>()
    const dispatch = useDispatch()

    if (!user || !cart) {
        return(
            <CustomText>Error</CustomText>
        )
        
    }
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
            if (!user.address){
                return console.log('oi')
            }
            const estimate = {
                deliveryAddress: adress?.address || user.address.address,
                time: 45,
                distance: 5,
                value: 4,
                valueTotal: cart.price + 4,
                lat: adress?.lat || user.address.lng,
                lng: adress?.lng|| user.address.lng,
            }
            console.log(estimate)
            dispatch(setCurrentEstimate(estimate))
            navigate.navigate('FinalizeOrder')
        }
    })
    const getFieldProps = (fieldName: 'name' | 'phone') => ({
        value: formik.values[fieldName],
        onChangeText: formik.handleChange(fieldName),
        onBlur: formik.handleBlur(fieldName),
        error: formik.errors[fieldName],
    })
    return (
        <Container padding>
            <CustomText style={style.title}>Calcular Frete</CustomText>
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
            <CustomText style={[{ marginBottom: 5 }, isEnabled ? {} : style.displayNone]}>Endereço</CustomText>
            {isEnabled ? (
                <View style={{marginBottom: 61}}>
                    <GooglePlacesAutocomplete
                        GooglePlacesDetailsQuery={{ fields: "geometry" }}
                        fetchDetails={true}
                        placeholder="Informe um endereço"
                        query={{
                            key: GoogleAPIKey,
                            language: 'pt-BR',
                            components: 'country:br',
                        }}
                        onPress={(data, details = null) => {
                            if (details) {
                                setAdress({
                                    lat: details.geometry?.location.lat,
                                    lng: details.geometry?.location.lng,
                                    address: data.description
                                })
                            }
                            
                        }}
                        styles={{
                            textInputContainer: {
                                borderColor: '#9f9f9f',
                                borderWidth: 1,
                                borderRadius: 4,
                            },
                            textInput: {
                                height: 45,
                                color: '#333',
                                fontSize: 16,
                            },
                            listView: {
                                backgroundColor: '#fff',
                                zIndex: 10
                            },
                            container: {
                                position: "absolute",
                                width: '100%',
                            }
                        }}
                        enablePoweredByContainer={false}
                    />
                </View>
            ) : (
                <FormField
                    label="Endereço"
                    placeholder='Seu Endereço'
                    value={user.address?.address}
                    editable={false}
                    style={isEnabled ? style.displayNone : {}}
                />
            )}
            <View style={style.changeAdressWrap}>
                <CustomText>Alterar Endereço</CustomText>
                <Switch
                    trackColor={{ false: "#767577", true: "#333" }}
                    thumbColor={isEnabled ? "#CF3031" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <CustomText weight="Roboto-Black" style={style.subtotal}>Subtotal: <CustomText weight="Roboto-Black" style={style.subtotalValue} >R$ {cart.price.toFixed(2).replace('.', ',')}</CustomText></CustomText>
            <View style={style.buttonWrap}>
                <View style={{ flex: 1, marginEnd: 16 }}>
                    <CustomButton variant="white" onPress={() => navigate.goBack()}>Voltar</CustomButton>
                </View>
                <View style={{ flex: 1, marginStart: 16 }}>
                    <CustomButton onPress={formik.handleSubmit}>Calcular</CustomButton>
                </View>
            </View>
        </Container>
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
    subtotal: {
        textAlign: 'right',
        marginBottom: 16,
    },
    buttonWrap: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    displayNone: {
        display: 'none'
    },
    changeAdressWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'flex-end',
        marginBottom: 16
    }
})