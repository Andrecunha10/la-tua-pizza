import { IAddress } from "./address"

export type User =  {
    id: string,
    firstName: string
    lastName: string
    email: string
    phone: string
    address: IAddress | null
}