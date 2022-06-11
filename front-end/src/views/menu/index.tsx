import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import { Layout } from "../../components/layout";
import { Loading } from "../../components/loading";
import { IProduct } from "../../entities/product";
import { getProducts } from "../../service/getproducts";
import { CardMenu } from "./cardmenu";


export function MenuView () {
    const [products, setProducts] = useState<IProduct[]>()
        useEffect(() => {
            const fetch = async () => {
                try{
                    const result = await getProducts()
                    setProducts(result)
               } catch{
                    toast.error('Erro ao carregar o cardápio. Tente novamente', {
                        theme: 'colored'
                    })
               }      
            }
            fetch()
        }, [])
       
    return(
        <Layout>
            <Container>
                {!products? (
                    <Loading />
                ) : (
                    <CardMenu products={products} />
                )}                
            </Container>
        </Layout>
    )
}

