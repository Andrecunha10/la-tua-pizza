import React, { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { CustomText } from "../../components/CustomText";
import { IProduct } from "../../entities/product";
import { getProducts } from "../../services/getproducts";
import Toast from 'react-native-toast-message';

export function MenuView () {
    const [products, setProducts] = useState<IProduct[]>()
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts()
                setProducts(productsData)
            } catch {
                Toast.show({
                    type: 'error',
                    text1: 'Falha ao buscar produtos!',
                    text2: 'A conexão com o servidor falhou, tente novamente.'
                })
            }            
        }
        fetchProducts()
    }, [])
    console.log('produtos1', products)
    return(
        <Container>
            <CustomText>Cardápio</CustomText>
        </Container>
    )
}