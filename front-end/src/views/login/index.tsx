import { Container } from "react-bootstrap"
import styled from "styled-components"
import { Layout } from "../../components/layout"
import { Login } from "./login"
import { Register } from "./register"

export function LoginView (){
    return(
        <Layout>
            <Container className="d-flex h-100 flex-column align-items-center gap-3 gap-lg-5 flex-lg-row">
                <Login />
                <StyledP className="mb-0">Ou</StyledP>
                <Register />
            </Container>
        </Layout>
    )
}

const StyledP = styled.p`
    font-size: 1.375rem;
    font-weight: 400;
    color: var(--main-color);
`