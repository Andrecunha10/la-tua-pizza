import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { CalculateShipping } from "../../components/calculateShipping";
import { Container } from "../../components/Container";
import { CustomText } from "../../components/CustomText";
import { deleteToCart, selectCart } from "../../store/slices/cartslices";
import { selectUser } from "../../store/slices/userslices";
import EmptyCart from "../../assets/img/empty_cart.svg"

export function CartView () {
    const productsOnCart = useSelector(selectCart)
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const handleDeleteProduct = () =>  {
        dispatch(deleteToCart())
    }
    return (
        <Container>
            {!productsOnCart || !user ? (
                <View style={style.emptyCartWrap}>
                    <EmptyCart width={150} height={150}/>
                    <CustomText weight="Roboto-Black" style={style.textEmptyCart}>Ops. Seu carrinho está vazio</CustomText>                    
                </View>
            ) : (
                <ScrollView style={style.sroll} keyboardShouldPersistTaps={'handled'}>
                    <CustomText weight="Roboto-Black" style={style.title}>Seu Pedido</CustomText>
                    <View style={style.wrapProduct}>
                        <Image source={{uri: productsOnCart.image, width: 50, height: 50}}/>
                        <CustomText weight="Roboto-Bold">{productsOnCart.name}</CustomText>
                        <CustomText weight="Roboto-Bold">R$ {productsOnCart.price.toFixed(2).replace('.', ',')}</CustomText>
                        <TouchableOpacity style={style.buttonTrash} onPress={handleDeleteProduct}> 
                            <FontAwesomeIcon icon={faTrash}/>
                        </TouchableOpacity>
                    </View>
                    <CalculateShipping 
                        title="Calcular Frete"
                        user={user}
                        cart={productsOnCart}
                        button="Calcular Frete"
                    />                
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
        marginTop:20
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
    }
})