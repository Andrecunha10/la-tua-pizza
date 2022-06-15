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
                        <Col xs={12} md={7}>
                            <Calculate user={user} products={productsInCart} />
                        </Col>
                        <Col xs={12} md={5}>
                            <EstimateMap />
                        </Col>
                    </Row>
                </Container>
            )}

        </Layout>
    )
}