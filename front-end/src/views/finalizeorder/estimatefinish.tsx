import { toast } from "react-toastify"
import { IEstimate } from "../../entities/estimante"
import { IUser } from "../../entities/user"
import { createOrder } from "../../service/createorder"
import { OrderResponseBody } from "@paypal/paypal-js"
import { PayPalButton } from "../../components/paypalbutton"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { IProduct } from "../../entities/product"

type IEstimenteFinish = {
    user: IUser
    currentEstimate: IEstimate
    product: IProduct
}

export function EstimateFinish({ user, currentEstimate, product }: IEstimenteFinish) {
    const navigate = useNavigate()
    const handlePayPalSucess = async (details: OrderResponseBody) => {
        try {
            await createOrder({
                estimate: currentEstimate,
                gatewayId: details.id,
                user: user,
                product: product
            })
            navigate('/pedido-sucesso')            
        } catch {
            toast.error('Falha ao processar seu pedido. Por favor, entre em contato conosco.', {
                theme: 'colored'
            })
        }
    }

    const handlePayPalError = () => {
        toast.error('Pagamento não efetivado. Tente novamente ou entre em contato conosco.', {
            theme: 'colored'
        })
    }
    return (
        <StyledDivPaypal>
            <PayPalButton
                value={currentEstimate.valueTotal}
                onSuccess={handlePayPalSucess}
                customId={user.id}
                onError={handlePayPalError}
            />
        </StyledDivPaypal>
    )
}

const StyledDivPaypal = styled.div`
    width: 100%;
`