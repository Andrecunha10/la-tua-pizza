import { faRectangleList} from "@fortawesome/free-regular-svg-icons/faRectangleList";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons/faPizzaSlice";
import { faOpencart } from "@fortawesome/free-brands-svg-icons/faOpencart";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { LogoutButton } from "../../components/logoutButton";
import { CartView } from "../cart";
import { MenuView } from "../menu";
import { MyOrdersView } from "../myOrders";

const Tab = createBottomTabNavigator()

export function ContentsView () {
    return (
        <Tab.Navigator 
            screenOptions= { ({ route }) => ({
                headerStyle: {
                    backgroundColor: '#CF3031',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontFamily: 'Roboto-Bold'
                },
                tabBarIcon: ( { color }) => {
                    let icon
                    switch (route.name) {
                        case 'Menu':
                            icon = faPizzaSlice
                            break;
                        case 'Cart':
                            icon = faOpencart
                            break;
                        case 'MyOrders':
                            icon = faRectangleList
                            break;
                    
                        default:
                            return null
                    }
                    return <FontAwesomeIcon icon={icon} size={30} color={color}/>
                },
                tabBarActiveBackgroundColor: '#222',
                tabBarInactiveBackgroundColor: '#333',
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#fff',
                tabBarLabelStyle: {
                    fontFamily: 'Roboto-Regular',
                    fontSize: 14,
                    marginBottom: 12
                },
                tabBarStyle: {
                    height: 80
                },
                tabBarIconStyle: {
                    marginTop: 12
                }
            })}
        >
            <Tab.Screen 
                name="Menu" 
                component={MenuView} 
                options={{
                    title: 'Cardápio',
                    headerRight: () => <LogoutButton />,
                }}
            />
            <Tab.Screen 
                name="Cart" 
                component={CartView}
                options={{
                    title: 'Carrinho',
                    headerRight: () => <LogoutButton />
                }}
            />
            <Tab.Screen 
                name="MyOrders" 
                component={MyOrdersView}
                options={{
                    title: 'Meus Pedidos',
                    headerRight: () => <LogoutButton />
                }}
            />
        </Tab.Navigator>
    )
}