import { IEstimate } from "./estimante"
import { IProduct } from "./product"
import { IUser } from "./user"

export type IUserOrders = {
    product: IProduct
    estimate: IEstimate
    userData: IUser
    user: string
    id: string
    partnerValue: number
    status: 'CREATED' | 'FINESHED' | 'PREPARING'
    createdAt: string
}