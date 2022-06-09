import { Container, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoMobile from "../../assts/img/logo_mobile.svg"
import GGmenu from "../../assts/img/gg_menu-left.svg"
import styled from "styled-components";
import { CustomButton, FirstPButton, SecondPButton } from "../button";
import { useDispatch, useSelector } from "react-redux"
import { deleteUser, selectUser } from "../../store/slices/userslices";
import { logOutUser } from "../../service/logoutuser";

export function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const handleLogout = async () => {
       await logOutUser()
       dispatch(deleteUser())
    }
    return (
        <header>
            <Navbar expand="lg">
                <Container fluid className="border-botton">
                    <Navbar.Toggle className="border-0" aria-controls="ffcanvasNavbar-expand-lg">
                        <img src={GGmenu} alt="Toogle Menu" width={40} height={40} />
                    </Navbar.Toggle>
                    <Navbar.Brand as={Link} to='/'>
                        <img src={LogoMobile} alt='Logo La Tua Pizza' width={224} height={81} />
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
                                <StyledNavLink className="mb-3 mb-lg-0 me-auto me-lg-0" as={Link} to="/cardapio">Cardápio</StyledNavLink>
                                <StyledNavLink className="mb-3 mb-lg-0 me-auto me-lg-0" as={Link} to="/carrinho">Carrinho</StyledNavLink>
                            </Nav>
                            <Nav className="">
                                {user? (
                                    <div>                                        
                                        <StyledDropdown title={user.firstName} id="basic-nav-dropdown" align='end'>
                                            <StyledItem  className="p-0">
                                                <StyledGetOut onClick={handleLogout}>Sair</StyledGetOut>
                                            </StyledItem >
                                        </StyledDropdown>
                                        <StyledWelcome className="mb-0 text-center d-none d-lg-block">Bem Vindo</StyledWelcome>    
                                    </div>
                                                                    
                                ) : (
                                    <CustomButton className="me-auto" padding="lg" to='/login' variant="danger">
                                        <FirstPButton>Pedido Online</FirstPButton>
                                        <SecondPButton>Faça Login</SecondPButton>
                                    </CustomButton>
                                )}
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
    &:hover{
        color: var(--main-color);
    }
`

const StyledDropdown = styled(NavDropdown)`    
    a{
        font-size: 1.375rem;
        color: var(--main-color) !important;
        font-weight: 700;
        padding-bottom: 0;
    }
`

const StyledItem = styled(NavDropdown.Item)`
    &:active{
        background-color: transparent;
    }
    &:hover{
        background-color: var(--main-color);
    }

`

const StyledGetOut = styled.button`
    font-size: 1rem;
    font-weight: 400;
    width: 100%;
    background-color: transparent;
    border: none;
    color: var(--text-color) !important;
    &:hover{
        background-color: transparent;
        color: #fff !important;
    }
`
const StyledWelcome = styled.p`
    font-weight: 300;
    color: var(--main-color);
    font-size: 1rem;
`