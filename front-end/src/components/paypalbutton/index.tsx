import { PayPalButtons } from "@paypal/react-paypal-js";
import styled from "styled-components";
import { OrderResponseBody } from "@paypal/paypal-js"

type IProps = {
    value: number
    customId: string
    onSuccess: (details: OrderResponseBody) => Promise<void>
    onError: () => void
}

export function PayPalButton ( { value, customId, onSuccess, onError }:IProps ) {
    return (
        <StyledPayPalButtons 
            createOrder={(data, actions) => {
                return actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [{
                        amount: {
                            currency_code: 'BRL',
                            value: value.toString()
                        },
                        custom_id: customId
                    }],
                    application_context:{
                        brand_name: 'La Tua Pizza',
                        shipping_preference: 'NO_SHIPPING'
                    }
                })
            }}
            onApprove={ async (data, actions) => {
                if (actions.order?.capture()){
                    const details = await actions.order.capture()
                    onSuccess(details)
                }
            }}
            onError={onError}
            style={{
                layout: 'horizontal',
                color: "black",
                tagline: false,
                height: 46
            }}
        />
    )
}

const StyledPayPalButtons = styled(PayPalButtons)`
    .paypal-buttons{
        display: block !important;
    }
`