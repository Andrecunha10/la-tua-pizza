import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import styled from "styled-components";
import { CustomButton } from "../../components/button";
import { FormField } from "../../components/formfield";
import { TitleH1 } from "../../components/titles";
import { IProduct } from "../../entities/product";
import { User } from "../../entities/user";
import * as yup from 'yup'
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AutoCompleteField } from "../../components/autocompletefiled";
import { IAddress } from "../../entities/address";
import { useState } from "react";
import { createEstimate, INewEstimante } from "../../service/createestimate";

type ICalculeteProps = {
    products: IProduct
    user: User
}

type IFormValues = {
    name: string
    phone: string
    address: IAddress | null
}

export function Calculate ({products, user}:ICalculeteProps) {
    const [enableChangeAddress, setEnableChangeAddress] = useState(true)

    const navigate = useNavigate()
    const formik = useFormik<IFormValues>({
        initialValues:{
            name: user.firstName,
            phone: user.phone,
            address: user.address
        },
        validationSchema: yup.object().shape({
            name: yup.string()
                .required('Nome deve ser informado.'),
            phone: yup.string()
                .required('Telefone deve ser informado.')
                .min(14, 'Informe um telefone válido'),
            address: yup.object()
                .typeError('Selecione um endereço na lista.')
        }),
        onSubmit: async(values) =>{
            const estimate = await createEstimate(values as INewEstimante)
            console.log(estimate)
        }
    })
    const getFildProps = (fildName: keyof IFormValues) =>{
        return{
            ...formik.getFieldProps(fildName),
            controlId: `input-${fildName}`,
            error: formik.errors[fildName],
            isInvalid: formik.touched[fildName] && !!formik.errors[fildName],
            isValid: formik.touched[fildName] && !formik.errors[fildName]
        }
    }

    const handleBack = () =>{
        navigate(-1)
    }

    const handleEnableChangeAddress = () => {
        if(enableChangeAddress === true ) {
            setEnableChangeAddress(false)
        } else {
            setEnableChangeAddress(true)
        }
    }
    return (
        <>
            <TitleH1 className="my-3">Calcular Frete</TitleH1>
            <Form onSubmit={formik.handleSubmit}>
                <FormFieldWhitDispayGrid>
                    <p>Nome</p>
                    <FormField
                        label="Nome"
                        placeholder="Seu Nome"
                        {...getFildProps('name')}
                    />
                </FormFieldWhitDispayGrid>
                <FormFieldWhitDispayGrid>
                    <p>Telefone</p>
                    <FormField
                        label="Telefone"
                        placeholder="Seu Telefone"
                        mask={[
                            { mask: '(00) 0000-0000' },
                            { mask: '(00) 00000-0000' }
                        ]}
                        {...getFildProps('phone')}
                        onAccept={value => formik.setFieldValue('phone', value)}
                    />
                </FormFieldWhitDispayGrid>
                <FormFieldWhitDispayGrid>
                    <p>Endereço</p>
                    <div>
                        <AutoCompleteField
                            label="Endereço"
                            placeholder={user.address?.address}
                            {...getFildProps('address')}
                            onChange={(address) => formik.setFieldValue('address', address)}
                            disabled={enableChangeAddress}
                        />
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            label="Alterar o endereço"
                            onChange={handleEnableChangeAddress}
                        />
                    </div>
                </FormFieldWhitDispayGrid>
                <Subtotal>Subtotal:<span className="ms-3">{products.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span></Subtotal>
                <div className="d-flex flex-column gap-3 flex-md-row justify-content-between">
                    <CustomButton 
                        padding="lg"
                        variant="outline-danger"
                        onClick={handleBack}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} className='me-4 me-md-5'/>VOLTAR
                    </CustomButton>
                    <CustomButton
                        padding="lg"
                        variant="danger"
                        type='submit'
                        loading={formik.isValidating || formik.isSubmitting}
                        disabled={formik.isValidating || formik.isSubmitting}
                    >CALCULAR FRETE</CustomButton>
                </div>
            </Form>
        </>
    )
}
const FormFieldWhitDispayGrid = styled.div`
    display: grid;
    > p {
        font-weight: 700;
    }
    @media(min-width: 576px){
        grid-template-columns: 2fr 8fr;
        align-items: center;
    }
    @media(min-width: 768px){
        grid-template-columns: 3fr 7fr;
    }
    @media(min-width: 992px){
        grid-template-columns: 4fr 6fr;
    }
`
const Subtotal = styled.p`
    font-size: 1.5rem;
    font-weight: 900;
    text-align: end;
    span{
        color: var(--main-color)
    }
`