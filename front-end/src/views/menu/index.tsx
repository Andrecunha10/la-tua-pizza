import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import styled from "styled-components";
import { CustomButton } from "../../components/button";
import { Layout } from "../../components/layout";
import { Loading } from "../../components/loading";
import { TitleH1 } from "../../components/titles";
import { products } from "../../entities/product";
import { getProducts } from "../../service/getproducts";

export function MenuView () {
    type productsProps = products | null
    type item = {
        name: string
        image: string
        description: string
        price: number
    }
    
    const [pizzas, setPizzas]:any = useState()
        useEffect(() => {
            const fetch = async ():Promise<void | productsProps > => {
                try{
                    const result = await getProducts()
                    setPizzas(result)
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
                {!pizzas ? (
                    <Loading />
                ) : (
                    <>
                    <TitleH1 className="text-start my-3">Pizzas</TitleH1>
                    <GridDiv>
                        {pizzas.map((item:item) => (
                            <CardProduct className="d-flex flex-column align-items-center" key={item.name}>
                                <img src={item.image} alt={item.name} width={220} height={220}/>
                                <h5>{item.name}</h5>
                                <p>{item.description}</p>
                                <div className="d-flex flex-row justify-content-between align-items-center w-100 mt-auto">
                                    <p className="mb-0">{item.price}</p>
                                    <CustomButton variant="danger">Comprar</CustomButton>
                                </div>
                            </CardProduct>
                        ))}
                    </GridDiv>
                    </>
                )}                
            </Container>
        </Layout>
    )
}

const GridDiv = styled.div`
    display: grid;
    justify-content: center;
    gap: 25px;
    grid-template-columns: 1fr;
    @media(min-width: 576px){
        grid-template-columns: 1fr 1fr;
    }
    @media(min-width: 992px){
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media(min-width: 1200px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`

const CardProduct = styled.div`
    border: 1px solid #E0E0E0;
    border-radius: 50px;
    padding: 16px;
    max-width: 320px;
    display: grid;
    justify-content: space-between;
    margin: 0 auto;
    &:hover{
        box-shadow: 0px 4px 30px rgba(71, 85, 114, 0.30);;
        border-color: #fff;
    }
    > p{
        font-size: .75rem;
    }
    img{
        object-fit: contain;
        border-radius: 30px;
    }
`