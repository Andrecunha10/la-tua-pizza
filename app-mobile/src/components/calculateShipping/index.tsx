import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { IProduct } from "../../entities/product";
import { IUser } from "../../entities/user";
import { CustomButton } from "../CustomButton";
import { CustomText } from "../CustomText";
import { FormField } from "../FormField";

type IProps = {
    title: string
    user: IUser
    cart: IProduct
    button: string
}

export function CalculateShipping ( { title, user, cart, button }:IProps ) {
    const navigate = useNavigation()
    return (
        <View>
            <CustomText style={style.title}>{title}</CustomText>
            <FormField 
                label="Nome"
                placeholder='Seu Nome'
                value={user.firstName}
            />
            <FormField 
                label="Telefone"
                placeholder='Seu Telefone'
                value={user.phone}
            />
            <FormField 
                label="Endereço"
                placeholder='Seu endereço'
                value={user.address?.address}
            />
            <CustomText weight="Roboto-Black" style={style.subtotal}>Subtotal: <CustomText weight="Roboto-Black" style={style.subtotalValue} >R$ {cart.price.toFixed(2).replace('.', ',')}</CustomText></CustomText>
            <View style={style.buttonWrap}>
                <View style={{flex: 1, marginEnd: 16}}>
                    <CustomButton variant="white" onPress={() => navigate.goBack()}>Voltar</CustomButton>
                </View>
                <View style={{flex: 1, marginStart: 16}}>
                    <CustomButton>{button}</CustomButton>
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
})