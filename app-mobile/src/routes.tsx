import React, { useEffect } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeView } from "./views/home";
import { LoginView } from "./views/login";
import { ContentsView } from "./views/contents";
import auth from '@react-native-firebase/auth';
import { getUser } from "./services/getuser";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, selecIsLoadingUser, selectIsUserLoggedIn, updateUser } from "./store/slices/userslices";
import { LogoutButton } from "./components/logoutButton";
import { Loading } from "./components/loading";
import { CalculateShipping } from "./components/calculateShipping";
import { FinalizeOrder } from "./views/finalizeOrder";
import { OrderSucess } from "./views/ordersucess";

export type IRootStackParamList = {
    Home: undefined
    Login: undefined
    Contents: undefined
    CalculateShipping: undefined
    FinalizeOrder: undefined
    OrderSucess: undefined
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
    const isUserloggedin = useSelector(selectIsUserLoggedIn)
    const isLoadingUser = useSelector(selecIsLoadingUser)
    if (isLoadingUser) {
        return <Loading />
    }    
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
            {!isUserloggedin ? (
                <>
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
                            headerRight: () => <LogoutButton />
                        }}
                       
                    />
                </>
            ) : (
                <>
                    <Stack.Screen 
                        name="Contents" 
                        component={ContentsView}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen 
                        name="CalculateShipping" 
                        component={CalculateShipping}
                        options={{
                            title: 'Calcular Frete',
                        }}
                        
                    />
                    <Stack.Screen 
                        name="FinalizeOrder" 
                        component={FinalizeOrder}
                        options={{
                            title: 'Finalizar o Pedido',
                            headerRight: () => <LogoutButton />,
                        }}
                    />
                    <Stack.Screen 
                        name="OrderSucess" 
                        component={OrderSucess}
                        options={{
                            title: 'Finalizar o Pedido',
                            headerRight: () => <LogoutButton />,
                        }}
                    />
                </>
            )}                       
        </Stack.Navigator>
    )
}