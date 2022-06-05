import { Container } from "react-bootstrap";
import { Layout } from "../../components/layout";
import { TitleH1 } from "../../components/titles";

export function MenuView (){
    return(
        <Layout>
            <Container fluid>
                <TitleH1 className="text-start mt-3">Pizzas</TitleH1>
            </Container>
        </Layout>
    )
}