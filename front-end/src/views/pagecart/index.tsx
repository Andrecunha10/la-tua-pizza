import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { Layout } from "../../components/layout";
import { selectCart } from "../../store/slices/cardslices";
import { selectUser } from "../../store/slices/userslices";
import { Calculate } from "./calculate";
import { YourOrder } from "./yourorder";

export function CartView () {    
    const productsInCart = useSelector(selectCart)
    const user = useSelector(selectUser)
    return (
        <Layout>
            {!productsInCart || !user ? (
                <Navigate to='/cardapio' />
            ) : (
                <Container>
                    <StyledContainer>
                        <YourOrder products={productsInCart}/>
                        <Calculate products={productsInCart} user={user}/>
                    </StyledContainer>
                </Container>
            )}
        </Layout>
    )
}

const StyledContainer = styled(Container)`
    max-width: 960px !important;
`