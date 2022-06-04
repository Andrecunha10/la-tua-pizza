import { Container } from "react-bootstrap"
import { Layout } from "../../components/layout"
import { TitleH2 } from "../../components/titles"
import { Register } from "./register"

export function LoginView (){
    return(
        <Layout>
            <Container className="d-flex h-100 flex-column align-items-center gap-4 flex-lg-row">
                <TitleH2>Login</TitleH2>
                <p className="mb-0">ou</p>
                <Register />
            </Container>
        </Layout>
    )
}