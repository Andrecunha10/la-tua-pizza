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

export function FinalizeOrderView() {
    const productsInCart = useSelector(selectCart)
    const user = useSelector(selectUser)
    const currentEstimate = useSelector(selectCurrentEstimanete)
    return (
        <Layout>
            {!productsInCart || !user || !currentEstimate ? (
                <Navigate to="/carrinho"/>
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