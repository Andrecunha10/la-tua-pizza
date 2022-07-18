import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/Container";
import { CustomText } from "../../components/CustomText";
import { deleteToCart, selectCart } from "../../store/slices/cartslices";
import EmptyCart from "../../assets/img/empty_cart.svg"
import { CustomButton } from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IRootStackParamList } from "../../routes";

export function CartView() {

    const navigate = useNavigation<NativeStackNavigationProp<IRootStackParamList>>();
    const productsOnCart = useSelector(selectCart)
    const dispatch = useDispatch()

    const handleDeleteProduct = () => {
        dispatch(deleteToCart())
    }
    return (
        <Container>
            {!productsOnCart ? (
                <View style={style.emptyCartWrap}>
                    <EmptyCart width={150} height={150} />
                    <CustomText weight="Roboto-Black" style={style.textEmptyCart}>Ops. Seu carrinho está vazio</CustomText>
                </View>
            ) : (
                <ScrollView style={style.sroll} keyboardShouldPersistTaps={'handled'}>
                    <CustomText weight="Roboto-Black" style={style.title}>Seu Pedido</CustomText>
                    <View style={style.wrapProduct}>
                        <Image source={{ uri: productsOnCart.image, width: 50, height: 50 }} />
                        <CustomText weight="Roboto-Bold">{productsOnCart.name}</CustomText>
                        <CustomText weight="Roboto-Bold">R$ {productsOnCart.price.toFixed(2).replace('.', ',')}</CustomText>
                        <TouchableOpacity style={style.buttonTrash} onPress={handleDeleteProduct}>
                            <FontAwesomeIcon icon={faTrash} />
                        </TouchableOpacity>
                    </View>
                    <CustomText weight="Roboto-Black" style={style.subtotal}>Subtotal: <CustomText weight="Roboto-Black" style={style.subtotalValue}>R$ {productsOnCart.price.toFixed(2).replace('.', ',')}</CustomText></CustomText>
                    <View style={style.buttonWrap}>
                        <View style={{ flex: 1, marginEnd: 16 }}>
                            <CustomButton variant="white" onPress={() => navigate.goBack()}>Voltar</CustomButton>
                        </View>
                        <View style={{ flex: 1, marginStart: 16 }}>
                            <CustomButton onPress={() => navigate.navigate('CalculateShipping')}>Calcular Frete</CustomButton>
                        </View>
                    </View>
                </ScrollView>
            )}
        </Container>
    )
}

const style = StyleSheet.create({
    emptyCartWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textEmptyCart: {
        fontSize: 24,
        marginTop: 20
    },
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
    subtotal: {
        fontSize: 20,
        marginBottom: 16,
        textAlign: 'right',
    },
    subtotalValue: {
        color: '#CF3031',
        fontSize: 20,
    }
})