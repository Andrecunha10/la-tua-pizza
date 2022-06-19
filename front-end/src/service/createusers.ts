import { createUserWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { IAddress } from "../entities/address"
import { IUser } from "../entities/user"
import { auth, db } from "./firebase"

type INewUserInput =  {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: IAddress | null
    password: string
}

export const createUser = async ( {email, password, firstName, lastName, phone, address}: INewUserInput )  : Promise<IUser> => {
    const result = await createUserWithEmailAndPassword(auth, email, password)
    await setDoc(doc(db, 'users', result.user.uid), {
        firstName,
        lastName,
        email,
        phone,
        address
    })
    return {
        id: result.user.uid,
        firstName,
        lastName,
        email,
        phone,
        address
    }
}