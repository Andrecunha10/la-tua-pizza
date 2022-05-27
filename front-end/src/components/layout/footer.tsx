import { Container } from "react-bootstrap"
import styled from "styled-components"

export function Footer () {
    return (
        <StyledFooter className="text-white d-flex align-items-center">
            <Container fluid>
                <p className="m-0">Página desenvolvida com o projeto de estudos.</p>
                <div>

                </div>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: var(--text-color);
`