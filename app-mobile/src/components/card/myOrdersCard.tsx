import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { IUserOrders } from "../../entities/userorders";
import { CustomText } from "../CustomText";


type IProps = {
    order: IUserOrders
}

export function MyOrdersCard( { order }:IProps ) {
    const id = `${order.id.substring(0, 4)}-${order.id.substring(4)}`
    return (
        <TouchableOpacity style={style.card}>
            <View style={style.view}>
                <CustomText weight='Roboto-Bold'>Pedido: </CustomText>
                <CustomText>#{id}</CustomText>
            </View> 
            <CustomText style={style.size}>{order.createdAt}</CustomText>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    card: {
        borderColor: '#d9d9d9',
        borderWidth: 1,
        marginBottom: 16,
        padding: 15,
        borderRadius: 5
    },
    view: {
        marginBottom: 10,
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    size: {
        fontSize: 14
    }
})
