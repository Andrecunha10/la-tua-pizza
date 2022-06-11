import { Button, ButtonProps, Spinner } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";

type Props = ButtonProps & {
    loading?: boolean
    padding?: string
    to?: string
}

export function CustomButton ({children, loading, to, ...otherProps}: Props){
    const Btn = (
        <StyledButton {...otherProps}>
            {loading &&(
                <Spinner animation="border" role="status" size="sm" className="me-2">
                    <span className="visually-hidden">Carregando...</span>
                </Spinner>
            )}
            {children}
        </StyledButton>
     )
    if (to) {
        return(
            <LinkContainer to={to}>
                {Btn}
            </LinkContainer>
        )
    
    }
    return Btn
}

const StyledButton = styled(Button)`
    border-radius: 20px;
    background-color: var(--main-color);
    border: var(--main-color) 1px solid;
    padding: 10px 32px;
    &:hover{
        background-color: #E35556;
        border: #E35556 1px solid;
    }
    ${props => props.variant === 'outline-danger' &&`
        background-color: #fff;
        border: var(--main-color) 1px solid;
        color: var(--main-color);
        &:hover{
            background-color: var(--main-color);
            border: var(--main-color) 1px solid;
        }
    `}
    ${props => props.padding === 'lg' &&`
        @media (min-width: 992px) {
            padding: 18px 50px;
        }
    `}
    ${props => props.padding === 'sm' &&`
        padding: 5px 15px;
    `}
`

type PProps = {
    children: React.ReactNode;
}

export function FirstPButton(props: PProps) {
    return(
        <StyledFirstPButton {...props} />
    )
}

const StyledFirstPButton = styled.p`
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1rem;
    margin: 0;
`

export function SecondPButton(props: Props) {
    return (
        <StyledSecondPButton {...props} />
    )
}

const StyledSecondPButton = styled.p`
    font-weight: 300;
    line-height: 1rem;
    margin: 0;
`