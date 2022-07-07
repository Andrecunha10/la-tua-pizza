import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from "./routes";
import { StatusBar } from "react-native";
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import store from "./store/store";

export default function App () {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <StatusBar backgroundColor="#CF3031" barStyle={"light-content"} />
                <Routes />
                <Toast />
            </NavigationContainer>
        </Provider>        
    )
}