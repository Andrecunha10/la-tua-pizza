import { Container } from "react-bootstrap";
import { Layout } from "../../components/layout";
import { TitleH1 } from "../../components/titles";
import NotFound from "../../assts/img/404.svg"
import styled from "styled-components";
import { CustomButton, FirstPButton } from "../../components/button";

export function NotFoundView () {
    return(
        <Layout>
            <Container className="d-flex flex-column align-items-center">
                <StyledImg className="my-4" src={NotFound} alt="404" width={272} height={99}/>
                <TitleH1>Página Não Encontrada</TitleH1>
                <p className="mb-4 text-center">Desculpe, mas não encontramos a página solicitada.</p>
                <CustomButton padding="lg" to="/">
                    <FirstPButton>Voltar para a Home</FirstPButton>
                </CustomButton>
            </Container>
        </Layout>
    )
}

const StyledImg = styled.img`
    @media(min-width: 992px){
        width: 544px;
        height: 198px;
    }
`