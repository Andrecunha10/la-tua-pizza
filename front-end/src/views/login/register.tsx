import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import { CustomButton } from "../../components/button";
import { FormField } from "../../components/formfield";
import { TitleH2 } from "../../components/titles";
import * as yup from 'yup'
import { createUser } from "../../service/createusers";
import { FirebaseError } from "firebase/app";
import { AuthErrorCodes } from "firebase/auth"
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateUser } from "../../store/slices/userslices";
import { useNavigate } from "react-router-dom";

type FormValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmpassword: '',
    agree: false
}

export function Register (){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik<FormValues>({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            password: '',
            confirmpassword: '',
            agree: false
        },
        validationSchema: yup.object().shape({
            firstName: yup.string()
                .required('Preencha o seu primeiro nome.'),
            lastName: yup.string()
                .required('Preencha o seu sobrenome.'),
            email: yup.string()
                .required('Preencha seu e-mail.')
                .email('Preencha um email válido.'),
            phone: yup.string()
                .required('Preencha seu telefone.')
                .min(14, 'Preencha um telefone válido.'),
            address: yup.string()
                .required('Preenha seu endereço de entregas.')
                .min(10),
            password: yup.string()
                .required('É necessário criar uma senha.')
                .min(6, 'Sua senha deve ter pelo menos 6 caractéres')
                .max(20, 'Sua senha deve ter no máximo 20 caractéres.'),
            confirmpassword: yup.string()
                .required('É necessário confirmar sua senha.')
                .oneOf([yup.ref('password'), null],'Senhas não conferem'),
            agree: yup.boolean()
                .equals([true], 'É preciso concordar com os termos de uso.')
        }),
        onSubmit: async (values) => {
            try{
               const user = await createUser(values)
               const action = updateUser(user)
               dispatch(action)
               navigate('/cardapio')
            } catch (error){
                if (error instanceof FirebaseError && error.code === AuthErrorCodes.EMAIL_EXISTS){
                    formik.setFieldError('email', 'Este email já está em uso por outro usuário.')
                } else{
                    toast.error('Erro ao realizar cadastro, tente novamente',{
                        theme: 'colored'
                    })
                }       
            }
        }
    })
    const getFieldProps = (fildName: keyof FormValues) =>{
        return{
            ...formik.getFieldProps(fildName),
            controlId: `input-${fildName}`,
            error: formik.errors[fildName],
            isInvalid: formik.touched[fildName] && !!formik.errors[fildName],
            isValid: formik.touched[fildName] && !formik.errors[fildName]
        }
    }
    return(
        <div className="w-100">
            <TitleH2>Criar Conta</TitleH2>
            <Form onSubmit={formik.handleSubmit}>
                <FormField 
                    label="Primeiro Nome"
                    placeholder="Primeiro Nome *"
                    {...getFieldProps('firstName')}
                />
                <FormField 
                    label="Sobrenome"
                    placeholder="Sobrenome *"
                    {...getFieldProps('lastName')}
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
                <FormField 
                    label="Confirme sua senha"
                    placeholder="Confirme a sua senha *"
                    type="password"
                    {...getFieldProps('confirmpassword')}
                />
                <Form.Group className="mb-3" controlId="input-agree">
                    <StyledCheck
                        {...getFieldProps('agree')} 
                        type="checkbox"
                        label={<>Eu li e aceito os <a href='/termos-de-uso.pdf' target='blank'>Termos de Uso</a>.</>}
                    />
                    {formik.touched.agree && formik.errors.agree && (
                        <Form.Control.Feedback className="d-block" type="invalid">
                            {formik.errors.agree}
                        </Form.Control.Feedback>
                    )}
                </Form.Group>
                <div className="d-grid">
                    <CustomButton 
                        variant="danger" 
                        type="submit"
                        loading={formik.isSubmitting || formik.isValidating}
                        disabled={formik.isSubmitting || formik.isValidating}
                    >
                        Criar Conta
                    </CustomButton>
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