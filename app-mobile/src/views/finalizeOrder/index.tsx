import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import {  useSelector } from "react-redux";
import { Container } from "../../components/Container";
import { CustomButton } from "../../components/CustomButton";
import { CustomText } from "../../components/CustomText";
import { FormField } from "../../components/FormField";
import { IRootStackParamList } from "../../routes";
import { createOrder } from "../../services/createorder";
import {  selectCart } from "../../store/slices/cartslices";
import {  selectCurrentEstimanete } from "../../store/slices/estimateslice";
import { selectUser } from "../../store/slices/userslices";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { OrderSucess } from "../ordersucess";

export function FinalizeOrder() {
    const navigate = useNavigation<NativeStackNavigationProp<IRootStackParamList>>()
    const estimate = useSelector(selectCurrentEstimanete)
    const user = useSelector(selectUser)
    const cart = useSelector(selectCart)
    const productsOnCart = useSelector(selectCart)

    const PayOnDelivery = async () => {
        if (!estimate || !user || !cart) {
            return null
        }
        try {
            await createOrder({
                estimate: estimate,
                gatewayId: 'Pagar na engrega',
                user: user,
                product: cart
            })
            
            navigate.navigate('OrderSucess')            
        } catch {
            Toast.show({
                type: 'error',
                text1: 'Falha ao processar seu pedido!',
                text2: 'Por favor, entre em contato conosco.'
              })
        }
    }

    if (!productsOnCart || !user || !estimate){
        return (
            <OrderSucess />
        )
    }
    return (
        <Container padding>
            <CustomText style={style.title}>Finalizar Pedido</CustomText>
            <FormField
                label="Nome"
                value={user.firstName}
                editable={false}
            />
            <FormField
                label="Telefone"
                value={user.phone}
                editable={false}
            />
            <FormField
                label="Endereço de Entrega"
                value={estimate?.deliveryAddress}
                editable={false}
            />
            <View style={style.wrapProduct}>
                <Image source={{ uri: productsOnCart.image, width: 50, height: 50 }} />
                <CustomText weight="Roboto-Bold">{productsOnCart.name}</CustomText>
                <CustomText weight="Roboto-Bold">R$ {productsOnCart.price.toFixed(2).replace('.', ',')}</CustomText>
            </View>
            <CustomText weight="Roboto-Bold" style={style.end}>Taxa de Engrega: R$ {(4).toFixed(2).replace('.', ',')}</CustomText>
            <CustomText weight="Roboto-Black" style={style.end}>Total: <CustomText weight="Roboto-Black" style={style.totalValue}>R$ {estimate.valueTotal.toFixed(2).replace('.', ',')}</CustomText></CustomText>
            <View style={style.buttonWrap}>
                <View style={{ flex: 1, marginEnd: 16 }}>
                    <CustomButton variant="white" onPress={() => navigate.goBack()}>Voltar</CustomButton>
                </View>
                <View style={{ flex: 1, marginStart: 16 }}>
                    <CustomButton onPress={PayOnDelivery}>Finalizar</CustomButton>
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
    wrapProduct: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
    },
    buttonTrash: {
        padding: 10
    },
    sroll: {
        padding: 16
    },
    buttonWrap: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    end: {
        textAlign: 'right',
        marginBottom: 16
    },
    totalValue: {
        color: '#CF3031',
        fontSize: 20
    }
})