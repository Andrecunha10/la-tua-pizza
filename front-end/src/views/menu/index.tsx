import { Container } from "react-bootstrap";
import styled from "styled-components";
import { CustomButton } from "../../components/button";
import { Layout } from "../../components/layout";
import { TitleH1 } from "../../components/titles";

export function MenuView (){
    return(
        <Layout>
            <Container fluid>
                <TitleH1 className="text-start my-3">Pizzas</TitleH1>
                <GridDiv>
                    <CardProduct className="d-flex flex-column align-items-center">
                        <img src="/pepperoni.jpg" alt='Pepperoni' width={220} height={220}/>
                        <h5>Pepperoni</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                        <div className="d-flex flex-row justify-content-between align-items-center w-100">
                            <p className="mb-0">R$ 24.90</p>
                            <CustomButton variant="danger">Comprar</CustomButton>
                        </div>
                    </CardProduct>
                    <CardProduct className="d-flex flex-column align-items-center">
                        <img src="/pepperoni.jpg" alt='Pepperoni' width={220} height={220}/>
                        <h5>Pepperoni</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                        <div className="d-flex flex-row justify-content-between align-items-center w-100">
                            <p className="mb-0">R$ 24.90</p>
                            <CustomButton variant="danger">Comprar</CustomButton>
                        </div>
                    </CardProduct>
                    <CardProduct className="d-flex flex-column align-items-center">
                        <img src="/pepperoni.jpg" alt='Pepperoni' width={220} height={220}/>
                        <h5>Pepperoni</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                        <div className="d-flex flex-row justify-content-between align-items-center w-100">
                            <p className="mb-0">R$ 24.90</p>
                            <CustomButton variant="danger">Comprar</CustomButton>
                        </div>
                    </CardProduct>
                    <CardProduct className="d-flex flex-column align-items-center">
                        <img src="/pepperoni.jpg" alt='Pepperoni' width={220} height={220}/>
                        <h5>Pepperoni</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                        <div className="d-flex flex-row justify-content-between align-items-center w-100">
                            <p className="mb-0">R$ 24.90</p>
                            <CustomButton variant="danger">Comprar</CustomButton>
                        </div>
                    </CardProduct>
                    <CardProduct className="d-flex flex-column align-items-center">
                        <img src="/pepperoni.jpg" alt='Pepperoni' width={220} height={220}/>
                        <h5>Pepperoni</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                        <div className="d-flex flex-row justify-content-between align-items-center w-100">
                            <p className="mb-0">R$ 24.90</p>
                            <CustomButton variant="danger">Comprar</CustomButton>
                        </div>
                    </CardProduct>
                    <CardProduct className="d-flex flex-column align-items-center">
                        <img src="/pepperoni.jpg" alt='Pepperoni' width={220} height={220}/>
                        <h5>Pepperoni</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                        <div className="d-flex flex-row justify-content-between align-items-center w-100">
                            <p className="mb-0">R$ 24.90</p>
                            <CustomButton variant="danger">Comprar</CustomButton>
                        </div>
                    </CardProduct>
                    <CardProduct className="d-flex flex-column align-items-center">
                        <img src="/pepperoni.jpg" alt='Pepperoni' width={220} height={220}/>
                        <h5>Pepperoni</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                        <div className="d-flex flex-row justify-content-between align-items-center w-100">
                            <p className="mb-0">R$ 24.90</p>
                            <CustomButton variant="danger">Comprar</CustomButton>
                        </div>
                    </CardProduct>
                    <CardProduct className="d-flex flex-column align-items-center">
                        <img src="/pepperoni.jpg" alt='Pepperoni' width={220} height={220}/>
                        <h5>Pepperoni</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                        <div className="d-flex flex-row justify-content-between align-items-center w-100">
                            <p className="mb-0">R$ 24.90</p>
                            <CustomButton variant="danger">Comprar</CustomButton>
                        </div>
                    </CardProduct>
                    <CardProduct className="d-flex flex-column align-items-center">
                        <img src="/pepperoni.jpg" alt='Pepperoni' width={220} height={220}/>
                        <h5>Pepperoni</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                        <div className="d-flex flex-row justify-content-between align-items-center w-100">
                            <p className="mb-0">R$ 24.90</p>
                            <CustomButton variant="danger">Comprar</CustomButton>
                        </div>
                    </CardProduct>
                </GridDiv>
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