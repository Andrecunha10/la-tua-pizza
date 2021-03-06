import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import styled from "styled-components";
import { CustomButton } from "../../components/button";
import { FormField } from "../../components/formfield";
import { TitleH1 } from "../../components/titles";
import { IProduct } from "../../entities/product";
import { IUser } from "../../entities/user";
import * as yup from 'yup'
import { Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AutoCompleteField } from "../../components/autocompletefiled";
import { IAddress } from "../../entities/address";
import { createEstimate, INewEstimante } from "../../service/createestimate";
import { useDispatch } from "react-redux";
import { setCurrentEstimate, clearCurrenteEstimate } from "../../store/slices/estimateslice";
import { IEstimate } from "../../entities/estimante";
import { EstimateFinish } from "../finalizeorder/estimatefinish";
import { useState } from "react";
import { createOrder } from "../../service/createorder";
import { toast } from "react-toastify";

type ICalculeteProps = {
    products: IProduct
    user: IUser
    currentEstimate?: IEstimate
}

type IFormValues = {
    name: string
    phone: string
    address: IAddress | null
}

export function Calculate ({products, user, currentEstimate}:ICalculeteProps) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
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
        onSubmit: async({address}) =>{
            const values = {
                address,
                subtotal: products.price
            }
            if(!currentEstimate) {
                const estimate = await createEstimate(values as INewEstimante)
                dispatch(setCurrentEstimate(estimate))
                navigate('/finalizar-pedido')
            }           
        }
    })
    const getFildProps = (fildName: keyof IFormValues) =>{
        return{
            ...formik.getFieldProps(fildName),
            controlId: `input-${fildName}`,
            error: formik.errors[fildName],
            isInvalid: formik.touched[fildName] && !!formik.errors[fildName],
            isValid: formik.touched[fildName] && !formik.errors[fildName],
            disabled: !!currentEstimate
        }
    }

    const handleBack = () =>{
        if (currentEstimate) {
            dispatch(clearCurrenteEstimate())
        }
        navigate(-1)
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const PayOnDelivery = async () => {
        if (!currentEstimate) {
            return null
        }
        try {
            await createOrder({
                estimate: currentEstimate,
                gatewayId: 'Pagar na engrega',
                user: user,
                product: products
            })
            navigate('/pedido-sucesso')            
        } catch {
            toast.error('Falha ao processar seu pedido. Por favor, entre em contato conosco.', {
                theme: 'colored'
            })
        }
    }
    
    return (
        <>
            {!currentEstimate &&
                <TitleH1 className="my-3">Calcular Frete</TitleH1>
            }            
            <Form onSubmit={formik.handleSubmit}>
                <FormFieldWhitDispayGrid className={`${currentEstimate ? ('d-block') : ('')}`}>
                    <p className="mb-1">Nome</p>
                    <FormField
                        label="Nome"
                        placeholder="Seu Nome"
                        {...getFildProps('name')}
                    />
                </FormFieldWhitDispayGrid>
                <FormFieldWhitDispayGrid className={`${currentEstimate ? ('d-block') : ('')}`}>
                    <p className="mb-1">Telefone</p>
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
                <FormFieldWhitDispayGrid className={`${currentEstimate ? ('d-block') : ('')}`}>
                    <p className="mb-1">Endereço</p>
                    <div>
                        <AutoCompleteField
                            label="Endereço"
                            placeholder={user.address?.address}
                            {...getFildProps('address')}
                            onChange={(address) => formik.setFieldValue('address', address)}
                        />
                    </div>
                </FormFieldWhitDispayGrid>
                {!currentEstimate ? (
                    <Subtotal>Subtotal:<span className="ms-3">{products.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span></Subtotal>
                ) : (
                    <Subtotal>Total:<span className="ms-3">{(products.price + currentEstimate.value).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span></Subtotal>
                )}
                
                <div className="d-flex flex-column gap-3 flex-md-row justify-content-between">
                    <CustomButton 
                        padding="lg"
                        variant="outline-danger"
                        onClick={handleBack}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} className='me-4 me-md-5'/>VOLTAR
                    </CustomButton>
                    {!currentEstimate ? (
                        <CustomButton
                            padding="lg"
                            variant="danger"
                            type='submit'
                            loading={formik.isValidating || formik.isSubmitting}
                            disabled={formik.isValidating || formik.isSubmitting}
                        >CALCULAR FRETE</CustomButton>
                    ) : (
                        <CustomButton
                            padding="lg"
                            variant="danger"
                            loading={formik.isValidating || formik.isSubmitting}
                            disabled={formik.isValidating || formik.isSubmitting}
                            onClick={handleShow}
                        >Finalizar Pedido</CustomButton> 
                    )}                    
                </div>
            </Form>
            <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Finalizar o Pedido</Modal.Title>
                </Modal.Header>
                <Modal.Body>Como deseja realizar o pagamento?</Modal.Body>
                <Modal.Footer className="justify-content-between">
                    <div className="d-grid w-100">
                        <CustomButton variant="outline-danger" onClick={PayOnDelivery}>
                            Pagar na entrega?
                        </CustomButton>
                    </div>                
                    {!currentEstimate ? (null) : (
                        <EstimateFinish 
                            currentEstimate={currentEstimate}
                            user={user}
                            product={products}
                        />  
                    )}
                </Modal.Footer>
            </Modal>
    </>
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