
import { signInWithEmailAndPassword } from "firebase/auth"
import { User } from "../entities/user"
import { auth } from "./firebase"
import { getUser } from "./getuser"

type Credentials = {
    email: string
    password: string
}

export const loginUser = async ( { email, password }: Credentials): Promise<User> =>{
   const result = await signInWithEmailAndPassword(auth, email, password)
   return getUser(result.user.uid)
}