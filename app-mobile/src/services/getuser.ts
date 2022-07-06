import firestore from '@react-native-firebase/firestore'
import { IUser } from '../entities/user'


export const getUser = async ( userId: string ):Promise<IUser> => {
    const userSnapshot = await firestore().collection('users').doc(userId).get()
    const userData = userSnapshot.data()
    if (!userSnapshot.exists || !userData) {
        throw new Error('User not found.')
    }
    const {firstName, lastName, email,phone, address } = userData
   return{
     id: userId,
     firstName,
     lastName,
     email,
     phone,
     address
   }
}