import { signOut } from "firebase/auth"
import { auth } from "./firebase"

export const logOutUser = async () => {
    await signOut(auth)
}