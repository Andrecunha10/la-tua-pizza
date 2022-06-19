import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Layout } from "../../components/layout";
import { TitleH1 } from "../../components/titles";
import { selectCart } from "../../store/slices/cardslices";
import { selectCurrentEstimanete } from "../../store/slices/estimateslice";
import { selectUser } from "../../store/slices/userslices";
import { Calculate } from "../pagecart/calculate";
import { EstimateMap } from "./estimatemap";
import { EstimateNumbers } from "./estimatenumbers";
import Delivery from "../../assts/img/delivery.svg"
import { CustomButton } from "../../components/button";
import styled from "styled-components";

export function FinalizeOrderView() {
    const productsInCart = useSelector(selectCart)
    const user = useSelector(selectUser)
    const currentEstimate = useSelector(selectCurrentEstimanete)

    if (!productsInCart || !user || !currentEstimate) {
        return (
            <Navigate to="/carrinho"/>
        )
    }
    
    return (
        <Layout>
            {currentEstimate.distance > 10 ? (
                <Container className="text-center">
                    <div className="mx-auto">
                        <TitleH1 className="my-3">Não foi pssível calcular o frete!</TitleH1>
                        <StyledDelivery src={Delivery} alt="Imagem de um entregador" width={250} height={250}/>
                        <p>Desculpe, mas não realizamos entrega no endereço selecionado.</p>
                        <CustomButton variant="danger" to="/">
                            VOLTAR À HOME
                        </CustomButton>
                    </div>
                </Container>
            ) : (
                <Container>
                    <TitleH1 className="my-3">Finalizar Pedido</TitleH1>
                    <Row>
                        <Col xs={12} md={7} lg={6}>
                            <Calculate user={user} products={productsInCart} currentEstimate={currentEstimate} />
                        </Col>
                        <Col xs={12} md={5} lg={6}>
                            <div className="h-100 d-flex flex-column">
                                <EstimateMap currentEstimate={currentEstimate}/>
                                <EstimateNumbers currentEstimate={currentEstimate} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            )}
        </Layout>
    )
}

const StyledDelivery = styled.img`
    @media(min-width: 576px) {
        height: 330px;
        width: 330px;
    }
`