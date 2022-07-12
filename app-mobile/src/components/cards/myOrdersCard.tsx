import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { IUserOrders } from "../../entities/userorders";
import { CustomText } from "../CustomText";
import { OrderModal } from "../modal";


type IProps = {
    order: IUserOrders
}

export function MyOrdersCard( { order }:IProps ) {
    const [visible, setVisible] = useState(false)

    const id = `${order.id.substring(0, 4)}-${order.id.substring(4)}`
    return (
        <>
            <TouchableOpacity style={style.card} onPress={() => setVisible(true)}>
                <View style={style.view}>
                    <CustomText weight='Roboto-Bold'>Pedido: </CustomText>
                    <CustomText>#{id}</CustomText>
                </View> 
                <CustomText style={style.size}>{order.createdAt}</CustomText>
            </TouchableOpacity>
            <OrderModal order={order} visible={visible} onRequestClose={() => setVisible(false)}/>
        </>
        
    )
}

const style = StyleSheet.create({
    card: {
        borderColor: '#9f9f9f',
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
