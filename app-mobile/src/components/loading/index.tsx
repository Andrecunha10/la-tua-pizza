import React from "react";
import { ActivityIndicator } from "react-native";
import { Container } from "../Container";

export function Loading () {
    return (
        <Container center>
            <ActivityIndicator size='large' color='#CF3031'/>
        </Container>
    )
}