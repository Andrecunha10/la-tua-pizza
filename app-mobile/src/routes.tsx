import React, { useEffect } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeView } from "./views/home";
import { LoginView } from "./views/login";
import { ContentView } from "./views/content";
import auth from '@react-native-firebase/auth';
import { current } from "@reduxjs/toolkit";
import { getUser } from "./services/getuser";
import { useDispatch } from "react-redux";
import { deleteUser, updateUser } from "./store/slices/userslices";

export type IRootStackParamList = {
    Home: undefined
    Login: undefined
    Content: undefined
}

const Stack = createNativeStackNavigator<IRootStackParamList>()

export function Routes () {
    const dispatch = useDispatch()
    useEffect(() => {
        auth().onAuthStateChanged(async currentUser => {
            if(currentUser) {
                const user = await getUser(currentUser.uid)
                dispatch(updateUser(user))
            } else {
                dispatch(deleteUser())
            }
        })
    }, [])
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