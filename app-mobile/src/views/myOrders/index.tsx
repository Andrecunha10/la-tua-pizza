import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../../components/Container";
import { CustomText } from "../../components/CustomText";
import { Loading } from "../../components/loading";
import { selectLoadOrderInfo, selectUserOrder } from "../../store/slices/userOrderSlices";
import { LoadingStatus } from "../../entities/loadingstatus";
import { CustomAlert } from "../../components/customAlert";
import { MyOrdersCard } from "../../components/cards/myOrdersCard";
import { FlatList, StyleSheet, View } from "react-native";
import Pizza from "../../assets/img/pizza.svg"
import { IUserOrders } from "../../entities/userorders";

export function MyOrdersView() {
    const userOrders = useSelector(selectUserOrder)
    const {status} = useSelector(selectLoadOrderInfo)

    if (status === LoadingStatus.loading) {
        return <Loading />;
      }
      if (status === LoadingStatus.failed) {
        return (
          <Container padding>
            <CustomAlert>Falha ao buscar seus pedidos.</CustomAlert>
          </Container>
        );
      }
    return (
        <Container>
            {!userOrders ? (
                <View style={style.notOrders}>
                    <View style={style.view}>
                        <Pizza width={150} height={150}/>
                        <CustomText style={style.text} weight="Roboto-Black">Você ainda não tem pedidos</CustomText>
                    </View>
                </View>
            ) : (
                <FlatList
                    data={userOrders}
                    renderItem={({ item }: { item: IUserOrders }) => <MyOrdersCard order={item} />}
                    contentContainerStyle={style.flatlist}
                />
            )}            
        </Container>
    )
}

const style = StyleSheet.create({
    notOrders: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    view:{
        alignItems: 'center',
    },
    text: {
        fontSize: 22,
        marginTop: 16
    },
    flatlist: {
        padding: 16
    }
})