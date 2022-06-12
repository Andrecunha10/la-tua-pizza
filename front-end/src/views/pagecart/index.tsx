import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Layout } from "../../components/layout";
import { TitleH1 } from "../../components/titles";
import { selectCart } from "../../store/slices/cardslices";
import { selectUser } from "../../store/slices/userslices";
import { Calculate } from "./calculate";
import { YourOrder } from "./yourorder";
import EmptyCart from "../../assts/img/empty-cart.svg"
import { CustomButton, FirstPButton, SecondPButton } from "../../components/button";

export function CartView () {    
    const productsInCart = useSelector(selectCart)
    const user = useSelector(selectUser)
    return (
        <Layout>
            {!productsInCart || !user ? (
                <Container className="d-flex flex-column align-items-center gap-4">
                    <TitleH1 className="text-center mt-3">Ops. Seu Carrinho ainda está vazio</TitleH1>
                    <img src={EmptyCart} alt='Carrinho Vazio' width={210} height={210} />
                    <CustomButton variant="danger" to="/cardapio" padding="lg">
                        <FirstPButton>Acesse o Cardápio</FirstPButton>
                        <SecondPButton>Para escolher seu pedido</SecondPButton>
                    </CustomButton>
                </Container>
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