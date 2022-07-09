import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "../../components/Container";
import { CustomText } from "../../components/CustomText";
import { IUserOrders } from "../../entities/userorders";
import { getOrders } from "../../services/getorders";
import { selectUser } from "../../store/slices/userslices";
import Toast from 'react-native-toast-message';

export function MyOrdersView() {
    const [myOrder, setMyOrders] = useState<IUserOrders[]>()
    const user = useSelector(selectUser)
    if (!user) {
        return null
    }
    useEffect( () => {
        const fecthOrders = async () => {
            try {
                const userOrders = await getOrders(user.id)
                setMyOrders(userOrders) 
            } catch {
                Toast.show({
                    type: 'error',
                    text1: 'Falha ao carregar seus pedidos!',
                    text2: 'A conexão com o servidor falhou, tente novamente.'
                })
            }
            
        }
        fecthOrders()
    }, [])
    return (
        <Container>
            <CustomText>Meus Pedidos</CustomText>
        </Container>
    )
}