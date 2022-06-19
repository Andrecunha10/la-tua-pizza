import { doc, getDoc } from "firebase/firestore";
import { IUser } from "../entities/user";
import { db } from "./firebase";

export const getUser = async (userId: string): Promise<IUser> => {
   const userSnapshot = await getDoc(doc(db, 'users', userId))
   if(!userSnapshot.exists()) {
       throw new Error('User not found.')
   }
   const {firstName, lastName, email,phone, address } = userSnapshot.data()
   return{
     id: userId,
     firstName,
     lastName,
     email,
     phone,
     address
   }
}