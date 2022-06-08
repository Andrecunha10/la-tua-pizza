import { useFormik } from "formik"
import { Form } from "react-bootstrap"
import { toast } from "react-toastify"
import styled from "styled-components"
import { CustomButton, FirstPButton, SecondPButton } from "../../components/button"
import { FormField } from "../../components/formfield"
import * as yup from 'yup'

type FormValues = {
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
}

export function FormMessage () {
    const formik = useFormik<FormValues>({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            subject: '',
            message: '',
        },
        validationSchema: yup.object().shape({
            name: yup.string()
                .required('Preencha seu nome.'),
            phone: yup.string()
                .required('Preencha seu telefone.')
                .min(14, 'Preencha um telefone válido.'),
            email: yup.string()
                .required('Preencha seu email.')
                .email('Preencha um email válido.'),
            subject: yup.string()
                .required('Informe um assunto.'),
            message: yup.string()
                .required('Informe sua solicitação.')
        }),
        onSubmit: async () => {
            formik.setFieldValue('name', '')
            formik.setFieldTouched('name', false)
            formik.setFieldValue('phone', '')
            formik.setFieldTouched('phone', false)
            formik.setFieldValue('email', '')
            formik.setFieldTouched('email', false)
            formik.setFieldValue('subject', '')
            formik.setFieldTouched('subject', false)
            formik.setFieldValue('message', '')
            formik.setFieldTouched('message', false)
            toast.success('Mensagem enviada com sucesso')
        }
    })
    const getFieldProps =(fildName: keyof FormValues) =>{
        return {
            ...formik.getFieldProps(fildName),
            error: formik.errors[fildName],
            isInvalid: formik.touched[fildName] && !!formik.errors[fildName],
            isValid: formik.touched[fildName] && !formik.errors[fildName]
        }
    }
    return (
        <div className="container">
            <Form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <FormField 
                            borderRadius
                            controlId="input-name"
                            label="Nome"
                            placeholder="Nome: *"
                            {...getFieldProps('name')}
                        />
                    </div>
                    <div className="col-12 col-lg-6">
                        <FormField 
                            borderRadius
                            controlId="input-phone"
                            label="Telefone"
                            placeholder="Telefone: *"
                            mask={[
                                { mask: '(00) 0000-0000' },
                                { mask: '(00) 00000-0000' }
                            ]}
                            {...getFieldProps('phone')}
                            onAccept={value => formik.setFieldValue('phone', value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <FormField 
                            borderRadius
                            controlId="input-email"
                            label="E-mail"
                            placeholder="E-mail: *"
                            {...getFieldProps('email')}
                        />
                    </div>
                    <div className="col-12 col-lg-6">
                        <FormField 
                            borderRadius
                            controlId="input-subject"
                            label="Assunto"
                            placeholder="Assunto: *"
                            {...getFieldProps('subject')}
                            required
                        />
                    </div>
                </div>
                <div className="d-grid">
                    <StyledFormField
                        borderRadius 
                        controlId="input-message"
                        label="Mensagem"
                        placeholder="Sua mensagem: *"
                        {...getFieldProps('message')}
                    />
                </div>
                <div className="d-grid">
                    <CustomButton className="mx-auto" variant="danger" padding="lg" type="submit">
                        <FirstPButton>Enviar</FirstPButton>
                        <SecondPButton>Sua Mensagem</SecondPButton>
                    </CustomButton>
                </div>
            </Form>
        </div>
    )
}

const StyledFormField = styled(FormField)`
    height: 150px;
    padding-bottom: 100px;
`