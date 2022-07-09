import firestore from '@react-native-firebase/firestore'
import { IUserOrders } from '../entities/userorders'



export const getOrders = async (userId:string) => { 
    const userOrdersDocs = await firestore()
        .collection('orders')
        .where('user', '==', userId)
        .get()
    const userOrders: IUserOrders[] = [];
    userOrdersDocs.forEach(doc => {
        const {
            product,
            estimate,
            userData,
            user,
            id,
            partnerValue,
            status,
            createdAt
        } = doc.data()
        userOrders.push({
            product,
            estimate,
            userData,
            user,
            id,
            partnerValue,
            status,
            createdAt: createdAt.toDate().toISOString()
        })
    })
    return userOrders
}