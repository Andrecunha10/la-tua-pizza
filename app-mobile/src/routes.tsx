import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeView } from "./views/home";
import { LoginView } from "./views/login";
import { ContentView } from "./views/content";

export type IRootStackParamList = {
    Home: undefined
    Login: undefined
    Content: undefined
}

const Stack = createNativeStackNavigator<IRootStackParamList>()

export function Routes () {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#CF3031',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontFamily: 'Roboto-Bold'
                }
            }}
        >
            <Stack.Screen 
                name="Home" 
                component={HomeView} 
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Login" 
                component={LoginView}
                options={{
                    title: 'Entrar no sistema',
                }}
            />
            <Stack.Screen 
                name="Content" 
                component={ContentView}
                options={{
                    title: 'Meus Pedidos',
                }}
            />
        </Stack.Navigator>
    )
}