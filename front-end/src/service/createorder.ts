import { addDoc, collection } from "firebase/firestore"
import { IEstimate } from "../entities/estimante"
import { IUser } from "../entities/user"
import { db } from "./firebase"

type INewOrderInput = {
    estimate: IEstimate
    gatewayId: string
    user: IUser
}

export const createOrder  = async ( {estimate, gatewayId, user }:INewOrderInput ): Promise<void> => {
    const {id: userId, ...userData } = user
    const calcId = new Date().getTime().toString(36).toUpperCase()
    const newOrderData = {
        estimate,
        gatewayId,
        userData,
        user: userId,
        id: calcId,
        partnerValue: estimate.value,
        status: 'CREATED',
        createdAt: new Date()
    }
    await addDoc(collection(db, 'orders'), newOrderData)
}