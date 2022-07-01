import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeView } from "./views/home";
import { LoginView } from "./views/login";

export type IRootStackParamList = {
    Home: undefined
    Login: undefined
}

const Stack = createNativeStackNavigator<IRootStackParamList>()

export function Routes () {
    return (
        <Stack.Navigator>
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
            />
        </Stack.Navigator>
    )
}