import { InputHTMLAttributes } from "react";
import { Form, FormControlProps } from "react-bootstrap";
import { IMaskInput } from "react-imask";
import styled from "styled-components";

export type IFormFieldProps = {
    controlId: string
    label: string
    error?: string
    visuallyHidden?: boolean
    mask?: { mask: string}[]
    onAccept?: (value: unknown) => void
    borderRadius?: boolean
} & FormControlProps & InputHTMLAttributes<HTMLInputElement>

export function FormField ({ controlId, label, error, visuallyHidden=true, mask, onAccept, ...inputProps} : IFormFieldProps) {
    return (
        <Form.Group className="mb-3" controlId={controlId}>
            {label && <Form.Label visuallyHidden={visuallyHidden}>{label}</Form.Label>}
            {mask? (
                <StyledFormControl 
                    {...inputProps}
                    forwardedAs={IMaskInput}
                    mask={mask}
                    onChange={undefined}
                    onAccept={onAccept}
                />
            ) : (
                <StyledFormControl {...inputProps}/>
            )}
            <Form.Control.Feedback type="invalid">
                {error}
            </Form.Control.Feedback>
        </Form.Group>
    )
}

const StyledFormControl = styled(Form.Control)`
    background: #FFFFFF;
    height: 45px;
    color: var(--text-color);
    font-weight: 500;
    ${props => props.borderRadius && `
        border-radius: 30px;
        height: 55px;
        border: 1px solid var(--main-color);
        &:focus{
        box-shadow: 0px 0px 3px 3px rgba(207, 48, 49, 0.2);
        border: 1px solid var(--main-color);
        color: var(--text-color);
        }
    `}
`