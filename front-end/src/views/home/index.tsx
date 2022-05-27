import { Alert, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import BG from "../../assts/img/background_desktop.jpg"
import PizzaDesktop from "../../assts/img/pizza_home_desktop.jpg"
import PizzaMobile from "../../assts/img/pizza_home_mobile.jpg"
import LogoTwitter from "../../assts/img/logo_twitter.svg"
import LogoInsta from "../../assts/img/logo_instagram.svg"
import LogoFace from "../../assts/img/logo_facebook.svg"
import PizzaLeft from "../../assts/img/pizza_left.jpg"
import PizzaRigth from "../../assts/img/pizza_rigth.jpg"
import { Layout } from "../../components/layout";

export function HomeView() {
    return (
        <Layout>
            <Container fluid className="w-100 pe-0 pe-sm-3 ps-lg-5 align-items-center">
                <div className="row">
                    <div className="col col-sm-6 col-lg-5 d-flex flex-column justify-content-center">
                        <Title className="mt-4">A melhor pizza da região</Title>
                        <div className="d-flex align-items-center justify-content-between gap-3">
                            <div>
                                <p className="mt-5 mt-sm-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
                                <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center">
                                    <Button>
                                        <FirstPButton className="m-0">Pedido Online</FirstPButton>
                                        <SecondPButton className="m-0">Faça Login</SecondPButton>
                                    </Button>
                                    <p className="mb-0 font-weight-bold">ACESSE O CARDÁPIO</p>
                                </div>
                            </div>
                            <SlicedPizza src={PizzaMobile} alt="Pizza cortada na metade" width={160} height={445} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-7">
                        <StyledPizza className="img-fluid mx-auto" src={PizzaDesktop} alt="Pizza Inteira" width={490} height={536} />
                    </div>
                </div>
            </Container>
            <Container fluid className="d-flex flex-column px-xl-0">
                <SubTitle>Sobre <span>Nós</span></SubTitle>
                <div className="d-flex flex-row gap-3 gap-xl-5 align-items-center">
                    <div className="d-none d-lg-block">
                        <img src={PizzaLeft} alt="Objeto com recorte de pizza" width={310} height={176} />
                    </div>
                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
                    </div>
                    <div className="d-none d-lg-block">
                        <img src={PizzaRigth} alt="Objeto com recorte de pizza" width={310} height={176} />
                    </div>
                </div>
                <div className="d-flex gap-3 justify-content-center">
                    <a href="https://twitter.com/" target="_blank">
                        <img src={LogoTwitter} alt="Logo Twitter" width={58} height={58} />
                    </a>
                    <a href="https://pt-br.facebook.com/" target="_blank">
                        <img src={LogoFace} alt="Logo Twitter" width={58} height={58} />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src={LogoInsta} alt="Logo Twitter" width={58} height={58} />
                    </a>
                </div>
            </Container>
            <Container fluid>
                <SubTitle>Entre em <span>Contato</span></SubTitle>
                <Alert variant="danger">Aqui vira um formulário</Alert>
                <Button className="align-self-center">
                    <FirstPButton className="m-0">Enviar</FirstPButton>
                    <SecondPButton className="m-0">Sua Mensagem</SecondPButton>
                </Button>
            </Container>
        </Layout>
    )
}
const Title = styled.h1`
    font-family: 'Cabin Sketch', cursive;
    font-size: 3rem !important;
    margin-bottom: -40px;
    @media (min-width: 576px) {
        margin-bottom: 16px;
    }
    @media (min-width: 992px) {
        font-size: 4.5rem !important;
    }
    
`

const FirstPButton = styled.p`
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1rem;
`

const SecondPButton = styled.p`
    font-weight: 300;
    line-height: 1rem;
`

const SubTitle = styled.h2`
    font-weight: 900;
    color: var(--main-color);
    text-align: center;
    font-size: 2rem;

    span{
        color: var(--text-color);
    }
`

const SlicedPizza = styled.img`
    z-index: -1;
    @media (min-width: 576px) {
            display: none;
    }
`

const StyledPizza = styled.img`
    display: none;
    @media (min-width: 576px) {
            display: block;
    }
    @media (min-width: 992px) {
            width: 545px;
    }
`