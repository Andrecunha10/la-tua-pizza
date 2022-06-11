import { collection, getDocs } from "firebase/firestore"
import { IProduct } from "../entities/product"
import { db } from "./firebase"



export const getProducts = async ():Promise<IProduct[]> => {
    const doc = collection(db, 'pizzas')
    const products = await getDocs(doc)
    const productsSnapshot = products.docs.map(doc => ({...doc.data(), id:doc.id}))
    return productsSnapshot as IProduct[]
}