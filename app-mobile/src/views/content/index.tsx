import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Container } from "../../components/Container";
import { CustomText } from "../../components/CustomText";
import { IRootStackParamList } from "../../routes";

type IProps = NativeStackScreenProps<IRootStackParamList, 'Content'>

export function ContentView ({navigation}: IProps) {
    return (
        <Container padding>
            <CustomText>Aqui vira todo o conteúdo.</CustomText>
        </Container>
    )
}