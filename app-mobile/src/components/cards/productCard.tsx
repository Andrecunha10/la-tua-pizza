import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { IProduct } from "../../entities/product";
import { addToCart } from "../../store/slices/cartslices";
import { IRootTabParamList } from "../../views/contents";
import { CustomButton } from "../CustomButton";
import { CustomText } from "../CustomText";

type IProps = {
    product: IProduct
}

export function CardProduct ( { product }: IProps ) {
    const dispatch = useDispatch()
    const navigate = useNavigation<NativeStackNavigationProp<IRootTabParamList>>();
   
    const handleAddProductCart = (product: IProduct) => {
        dispatch(addToCart(product))
        navigate.navigate('Cart')
    }
    return (
        <View style={style.wrap}>
            <Image source={{uri: product.image, width: 150, height: 150}}/>
            <CustomText weight="Roboto-Medium" style={style.productName}>{product.name}</CustomText>
            <CustomText>{product.description}</CustomText>
            <View style={style.buttonView}>
                <CustomText weight="Roboto-Medium" style={style.price}>R$ {product.price.toFixed(2).replace('.', ',')}</CustomText>
                <CustomButton onPress={() => handleAddProductCart(product)}>Comprar</CustomButton>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    wrap: {
        borderColor: '#9f9f9f',
        borderWidth: 1,
        borderRadius: 50,
        padding: 25,
        marginBottom: 25,
        justifyContent: "space-between",
        alignItems: 'center',
        flex: 1
    },
    buttonView: {
        flexDirection: "row",
        justifyContent: 'space-around',
        width: '100%',
        alignItems: 'center',
        marginTop: 16
    },
    productName: {
        fontSize: 20,
        marginVertical: 16
    },
    price: {
        fontSize: 20
    }
})