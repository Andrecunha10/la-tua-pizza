import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { IProduct } from "../../entities/product";
import { CustomButton } from "../CustomButton";
import { CustomText } from "../CustomText";

type IProps = {
    product: IProduct
}

export function CardProduct ( { product }: IProps ) {
    return (
        <View style={style.wrap}>
            <Image source={{uri: product.image, width: 150, height: 150}}/>
            <CustomText weight="Roboto-Medium" style={style.productName}>{product.name}</CustomText>
            <CustomText>{product.description}</CustomText>
            <View style={style.buttonView}>
                <CustomText weight="Roboto-Medium" style={style.price}>R$ {product.price.toFixed(2).replace('.', ',')}</CustomText>
                <CustomButton>Comprar</CustomButton>
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