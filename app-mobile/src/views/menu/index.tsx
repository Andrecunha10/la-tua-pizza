import React, { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { IProduct } from "../../entities/product";
import { getProducts } from "../../services/getproducts";
import Toast from 'react-native-toast-message';
import { CardProduct } from "../../components/cards/productCard";
import { FlatList } from "react-native";
import { Loading } from "../../components/loading";


export function MenuView () {
    const [products, setProducts] = useState<IProduct[]>()
    const [loading, setLoadin] = useState(false)
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoadin(true)
                const productsData = await getProducts()
                setProducts(productsData)
            } catch {
                Toast.show({
                    type: 'error',
                    text1: 'Falha ao buscar produtos!',
                    text2: 'A conexão com o servidor falhou, tente novamente.'
                })
            }
            setLoadin(false)            
        }
        fetchProducts()
    }, [])

    {loading && (
        <Loading />
    )}
    return (
        <Container>
            
            <FlatList 
                data={products}
                renderItem={({ item }: { item: IProduct }) => <CardProduct product={item}/>}
                contentContainerStyle={{padding: 16}}
            />
            
        </Container>
    )
}