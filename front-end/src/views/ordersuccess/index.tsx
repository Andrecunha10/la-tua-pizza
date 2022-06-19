import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { CustomButton } from "../../components/button"
import { TitleH1 } from "../../components/titles"
import { deleteToCart } from "../../store/slices/cardslices"
import { clearCurrenteEstimate } from "../../store/slices/estimateslice"
import { selectUser } from "../../store/slices/userslices"
import PieceOfPizza from "../../assts/img/piece_pizza.svg"
import { Layout } from "../../components/layout"
import styled from "styled-components"
import { Container } from "react-bootstrap"

export function OrderSuccessView () {
    const user = useSelector(selectUser)
    const dispach = useDispatch()
    useEffect( () => {
        dispach(clearCurrenteEstimate())
        dispach(deleteToCart())
    }, [dispach])
    if (!user) {
        return (
            <Navigate to='/login' />
        )
    }
    return (
        <Layout>
            <Container>
                <StyledDiv className="text-center mx-auto">
                    <TitleH1 > Pedido Realizado</TitleH1>
                    <p className="m-0">Olá <strong>{user.firstName}</strong>, recebemos o seu pedido e já vamos prepará-lo. Assim que estiver pronto mandaremos o informações sobre o motoboy que irá entregar.</p>
                    <CustomButton variant="danger" to='/' padding="lg">
                        VOLTAR Á HOME
                    </CustomButton>
                    <img src={PieceOfPizza} alt='Pedaço de Pizza' width={159} height={146} className='fluid'/>
                </StyledDiv>
            </Container>
        </Layout>
    )   
}

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 560px;
    gap: 16px;
    @media(min-width: 576px) {
        img{
            width: 318px;
            height: 293px;
        }
    }
`