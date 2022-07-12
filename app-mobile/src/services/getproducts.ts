import firestore from "@react-native-firebase/firestore"
import { IProduct } from "../entities/product";

export const getProducts = async () => {
    const productsSnapshot: IProduct[] = []
    const doc = await firestore()
        .collection('pizzas')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                productsSnapshot.push({
                    id: documentSnapshot.id,
                    name: documentSnapshot.data().name,
                    image: documentSnapshot.data().image,
                    description: documentSnapshot.data().description,
                    price: documentSnapshot.data().price
                })
            });
          })
    return productsSnapshot
}