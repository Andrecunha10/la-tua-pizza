import { faFacebookSquare, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container } from "react-bootstrap"
import styled from "styled-components"

export function Footer () {
    return (
        <StyledFooter className="text-white d-flex align-items-center py-2 mt-3">
            <Container fluid className="d-flex flex-column align-items-center flex-md-row justify-content-between">
                <p className="m-0">Página desenvolvida com o projeto de estudos.</p>
                <div className="d-flex flex-row gap-3">
                    <StyledIcon icon={faWhatsapp}/>
                    <StyledIcon icon={faLinkedin}/>
                    <StyledIcon icon={faFacebookSquare}/>
                    <StyledIcon icon={faInstagram}/>
                </div>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: var(--text-color);
`

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 32px;
`