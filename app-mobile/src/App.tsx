import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from "./routes";
import { StatusBar } from "react-native";
import Toast from 'react-native-toast-message';

export default function App () {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#CF3031" barStyle={"light-content"} />
            <Routes />
            <Toast />
        </NavigationContainer>
    )
}