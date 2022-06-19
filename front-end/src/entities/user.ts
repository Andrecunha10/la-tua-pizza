import { IAddress } from "./address"

export type IUser =  {
    id: string,
    firstName: string
    lastName: string
    email: string
    phone: string
    address: IAddress | null
}