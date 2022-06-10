import { collection, getDocs } from "firebase/firestore"
import { products } from "../entities/product"
import { db } from "./firebase"



export const getProducts = async ():Promise<products> => {
    const doc = collection(db, 'pizzas')
    const products = await getDocs(doc)
    const productsSnapshot = products.docs.map(doc => doc.data())
    return productsSnapshot
    
}