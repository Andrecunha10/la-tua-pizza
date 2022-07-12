import { faRectangleList} from "@fortawesome/free-regular-svg-icons/faRectangleList";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons/faPizzaSlice";
import { faOpencart } from "@fortawesome/free-brands-svg-icons/faOpencart";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import { LogoutButton } from "../../components/logoutButton";
import { CartView } from "../cart";
import { MenuView } from "../menu";
import { MyOrdersView } from "../myOrders";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/slices/cartslices";
import { selectUser } from "../../store/slices/userslices";
import { useAppDispatch } from "../../store/store";
import { loadUserOrders } from "../../store/slices/userOrderSlices";
import Cart from "../../assets/img/cart.svg"

const Tab = createBottomTabNavigator()

export function ContentsView () {
    const cart = useSelector(selectCart)
    const user = useSelector(selectUser);
    const userId = user?.id || '';
    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(loadUserOrders(userId));
    }, [userId, dispatch]);
    
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
                },
            })}
        >
            <Tab.Screen 
                name="Menu" 
                component={MenuView} 
                options={{
                    title: 'Cardápio',
                    headerRight: () => <LogoutButton />,
                    tabBarIcon: () => (
                        <FontAwesomeIcon icon={faPizzaSlice} size={30} color='#fff'/>
                    )
                }}
            />
            <Tab.Screen 
                name="Cart" 
                component={CartView}
                options={{
                    title: 'Carrinho',
                    headerRight: () => <LogoutButton />,
                    tabBarBadge: cart ? 1 : undefined,
                    tabBarBadgeStyle: {
                        backgroundColor: '#CF3031',
                        fontSize: 14,
                        fontFamily: 'Roboto-Regular',
                        marginStart: 8,
                        marginTop: 16
                    },
                    tabBarIcon: () => (
                        <Cart />
                    )
                }}
            />
            <Tab.Screen 
                name="MyOrders" 
                component={MyOrdersView}
                options={{
                    title: 'Meus Pedidos',
                    headerRight: () => <LogoutButton />,
                    tabBarIcon: () => (
                        <FontAwesomeIcon icon={faRectangleList} size={30} color='#fff'/>
                    )
                }
            }
            />
        </Tab.Navigator>
    )
}