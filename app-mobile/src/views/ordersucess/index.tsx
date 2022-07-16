import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../../components/Container";
import { CustomText } from "../../components/CustomText";
import { selectUser } from "../../store/slices/userslices";
import PiacePizza from "../../assets/img/piace_pizza.svg"
import { StyleSheet, View, } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IRootTabParamList } from "../contents";

export function OrderSucess() {
    const user = useSelector(selectUser)
    const navigate = useNavigation<NativeStackNavigationProp<IRootTabParamList>>();
    
    return (
        <Container padding>
            <View style={styles.container}>
                <CustomText weight="Roboto-Black" style={styles.title}>Pedido Realizado Com Sucesso</CustomText>
                <CustomText style={styles.textCenter}>Olá <CustomText weight="Roboto-Bold">{user?.firstName}</CustomText>! Recebemos o seu pedido e já vamos prepará-lo. Obrigado pela preferência.</CustomText>
                <PiacePizza width={250} height={270} />
                <CustomButton size="lg" onPress={() => navigate.navigate('Menu')}>Voltar ao menu inicial</CustomButton>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 26,
        textAlign: 'center',
        marginBottom: 16
    },
    container: {
        alignItems: 'center'
    },
    textCenter:{
        textAlign: 'center',
        marginBottom: 16
    }
})