import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoMobile from "../../assts/img/logo_mobile.svg"
import GGmenu from "../../assts/img/gg_menu-left.svg"
import styled from "styled-components";
import { CustomButton, FirstPButton, SecondPButton } from "../button";

export function Header() {
    return (
        <header>
            <Navbar expand="lg">
                <Container fluid className="border-botton">
                    <Navbar.Toggle className="border-0" aria-controls="ffcanvasNavbar-expand-lg">
                        <img src={GGmenu} alt="Toogle Menu" width={40} height={40} />
                    </Navbar.Toggle>
                    <Navbar.Brand as={Link} to='/'>
                        <StyledLogo src={LogoMobile} alt='Logo La Tua Pizza' width={224} height={81} />
                    </Navbar.Brand>
                    <StyledOffCanvas
                        id='offcanvasNavbar-expand-lg'
                        aria-labelledby='offcanvasNavbarLabel-expand-lg'
                        placement="start"
                    >
                        <Offcanvas.Header className="align-items-start border-bottom pb-4" closeButton>
                            <Offcanvas.Title id='offcanvasNavbarLabel-expand-lg'>
                                <img src={LogoMobile} alt='Logo La Tua Pizza' width={224} height={81} />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="ps-lg-0">
                            <Nav className="justify-content-end justify-content-lg-center flex-grow-1 pe-3 pe-lg-0 gap-lg-3 align-items-center">
                                <StyledNavLink className="mb-3 mb-lg-0 me-auto me-lg-0" as={Link} to="/">Home</StyledNavLink>
                                <StyledNavLink className="mb-3 mb-lg-0 me-auto me-lg-0" as={Link} to="/">Cardápio</StyledNavLink>
                                <StyledNavLink className="mb-3 mb-lg-0 me-auto me-lg-0" as={Link} to="/">Carrinho</StyledNavLink>
                            </Nav>
                            <Nav className="">
                                <CustomButton className="me-auto" padding="lg" to='/login' variant="danger">
                                    <FirstPButton>Pedido Online</FirstPButton>
                                    <SecondPButton>Faça Login</SecondPButton>
                                </CustomButton>
                            </Nav>
                        </Offcanvas.Body>
                    </StyledOffCanvas>
                </Container>
            </Navbar>
        </header>
    )
}

const StyledOffCanvas = styled(Navbar.Offcanvas)`
    padding: 25px 45px;
    background-color: #444;
`

const StyledNavLink = styled(Nav.Link)`
    text-decoration: none;
    color: var(--text-color);
    font-weight: 500;
    font-size: 1.25rem;
`
const StyledLogo = styled.img`
    @media(min-width: 992px){
        width: 256px;
        height: 88px;
    }
`