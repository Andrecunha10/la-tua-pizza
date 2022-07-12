import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../../components/Container";
import { CustomText } from "../../components/CustomText";
import { Loading } from "../../components/loading";
import { selectLoadOrderInfo, selectUserOrder } from "../../store/slices/userOrderSlices";
import { LoadingStatus } from "../../entities/loadingstatus";
import { CustomAlert } from "../../components/customAlert";
import { MyOrdersCard } from "../../components/card/myOrdersCard";

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
        <Container padding>
            {userOrders.length < 0 ? (
                <CustomText>Você não tem pedidos</CustomText>
            ) : (
                <>
                {userOrders.map(order => (
                    <MyOrdersCard key={order.id} order={order}/>
                ))}
                </>
            )}            
        </Container>
    )
}