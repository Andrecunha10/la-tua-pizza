import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import React from "react"
import { Image, Modal, StyleSheet, TouchableOpacity, View } from "react-native"
import { IUserOrders } from "../../entities/userorders"
import { CustomText } from "../CustomText"

type IProps = {
    order: IUserOrders
    visible: boolean
    onRequestClose: () => void
}

export function OrderModal({ order, visible, onRequestClose }: IProps) {
    const id = `${order.id.substring(0, 4)}-${order.id.substring(4)}`
    return (
        <Modal visible={visible} onRequestClose={onRequestClose} transparent>
            <View style={style.viewModal}>
                <TouchableOpacity style={style.touchableOpacity} onPress={onRequestClose} />
                <View style={style.viewInnerModal}>
                    <View style={style.view}>
                        <CustomText weight='Roboto-Bold' style={style.size}>Pedido: <CustomText style={style.size}>#{id}</CustomText></CustomText>
                        <TouchableOpacity onPress={onRequestClose}>
                            <FontAwesomeIcon icon={faXmark} size={25}/>
                        </TouchableOpacity>
                    </View>
                    <CustomText style={style.view}>{order.createdAt}</CustomText>
                    <View style={style.view}>
                        <CustomText weight='Roboto-Bold'>Endereço: <CustomText>{order.estimate.deliveryAddress}</CustomText> </CustomText>
                    </View>
                    <View style={style.viewProducts}>
                        <Image source={{uri: order.product.image, width: 50, height: 50}}/>
                        <CustomText weight="Roboto-Bold">{order.product.name}</CustomText>
                        <CustomText weight="Roboto-Bold">R$ {(order.product.price).toFixed(2).replace('.', ',')}</CustomText>
                    </View>
                    <CustomText weight="Roboto-Black" style={{textAlign: 'right'}}>Total: <CustomText style={{color:'#CF3031'}} weight="Roboto-Bold">R$ {order.product.price}</CustomText></CustomText>
                </View>
            </View>
        </Modal>
    )
}

const style = StyleSheet.create({
    viewModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewInnerModal: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 5,
        marginEnd: 15,
        marginStart: 15
    },
    touchableOpacity: {
        opacity: 0.3,
        backgroundColor: '#000',
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    view: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    size: {
        fontSize: 18
    },
    image: {
        width: 50,
        height: 50,
    },
    viewProducts: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    }
})