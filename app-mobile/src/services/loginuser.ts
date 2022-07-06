
import { IUser } from "../entities/user"
import  auth  from "@react-native-firebase/auth"
import { getUser } from "./getuser"

type Credentials = {
    email: string
    password: string
}

export const loginUser = async ( { email, password }: Credentials): Promise<IUser> =>{
    const result = await auth().signInWithEmailAndPassword(email, password)
    return getUser(result.user.uid)
}