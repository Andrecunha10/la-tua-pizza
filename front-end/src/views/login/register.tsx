import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import { CustomButton } from "../../components/button";
import { FormField } from "../../components/formfield";
import { TitleH2 } from "../../components/titles";

type FormValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    agree: false
}

export function Register (){
    const formik = useFormik<FormValues>({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            address: '',
            password: '',
            agree: false
        },
        onSubmit: (values) => {
            console.log('oi', values)
        }
    })
    const getFieldProps = (fildName: keyof FormValues) =>{
        return{
            ...formik.getFieldProps(fildName),
            controlId: `input-${fildName}`,
            error: formik.errors[fildName],
            isIvalid: formik.touched[fildName] && !!formik.errors[fildName],
            isValid: formik.touched[fildName] && !formik.errors[fildName]
        }
    }
    return(
        <div className="w-100">
            <TitleH2>Criar Conta</TitleH2>
            <Form onSubmit={formik.handleSubmit}>
                <FormField 
                    label="Nome"
                    placeholder="Nome *"
                    {...getFieldProps('name')}
                />
                <FormField 
                    label="E-mail"
                    placeholder="E-mail *"
                    type="email"
                    {...getFieldProps('email')}
                />
                <FormField 
                    label="Telefone"
                    placeholder="Telefone *"
                    mask={[
                        { mask: '(00) 0000-0000' },
                        { mask: '(00) 00000-0000' }
                    ]}
                    {...getFieldProps('phone')}
                    onAccept={value => formik.setFieldValue('phone', value)}
                />
                <FormField 
                    label="Endereço"
                    placeholder="Endereço *"
                    {...getFieldProps('address')}
                />
                <FormField 
                    label="Senha"
                    placeholder="Senha *"
                    type="password"
                    {...getFieldProps('password')}
                />
                <Form.Group className="mb-3" controlId="input-agree">
                    <StyledCheck
                        {...getFieldProps('agree')} 
                        type="checkbox"
                        label={<>Eu li e aceito os <a href='/termos-de-uso.pdf' target='blank'>Termos de Uso</a>.</>}
                    />
                </Form.Group>
                <div className="d-grid">
                    <CustomButton variant="danger" type="submit">Criar Conta</CustomButton>
                </div>
            </Form>
           
        </div>
    )
}

const StyledCheck = styled(Form.Check)`
    input{
        border-color: var(--main-color);
    }
    input:checked{
    background-color: var(--main-color);
    border-color: var(--main-color);
    }
    input:focus{
        border-color: var(--main-color);
        box-shadow: 0px 0px 3px 3px rgba(207, 48, 49, 0.2);
    }
    a{
        color: var(--main-color);
        font-weight: 500;
    }
`