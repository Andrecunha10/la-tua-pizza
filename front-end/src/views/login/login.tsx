import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import { CustomButton } from "../../components/button";
import { FormField } from "../../components/formfield";
import { TitleH2 } from "../../components/titles";
import * as yup from 'yup'
import { loginUser } from "../../service/loginuser";
import { FirebaseError } from "firebase/app";
import { AuthErrorCodes } from "firebase/auth";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { selectIsUserLoggedIn, updateUser } from "../../store/slices/userslices";
import { Navigate, useNavigate } from "react-router-dom";

type FormValues = {
    email: string
    password: string
}
export function Login(){
    const isUserLoggendIn = useSelector(selectIsUserLoggedIn)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues:{
            email: '',
            password: '',
        },
        validationSchema: yup.object().shape({
            email: yup.string()
                .required('Preencha seu email.')
                .email('Preencha um email válido.'),
            password: yup.string()
                .required('É necessário informar sua senha')
        }),
        onSubmit: async (values) => {
            try {
                const user = await loginUser(values)
                dispatch(updateUser(user))
                navigate('/cardapio')
            } catch (error) {                
                const errorMsg = error instanceof FirebaseError && (error.code === AuthErrorCodes.INVALID_PASSWORD || error.code === AuthErrorCodes.USER_DELETED) 
                    ? 'Login ou senha inválidos' 
                    : 'Falha ao fazer login. Tente novamente.'
                toast.error(errorMsg, {
                    theme: 'colored'
                })
            }
        }
    })

    const getFieldProps = (fildName: keyof FormValues) => {
        return {
            ...formik.getFieldProps(fildName),
            controlId: `input-${fildName}-login`,
            error: formik.errors[fildName],
            isInvalid: formik.touched[fildName] && !!formik.errors[fildName],
            isValid: formik.touched[fildName] && !formik.errors[fildName]
        }
    }
    if (isUserLoggendIn) {
        return <Navigate to="/cardapio" />        
    }
    return (
        <div className="w-100">
            <TitleH2>Login</TitleH2>
            <Form onSubmit={formik.handleSubmit}>
                <FormField 
                    label="E-mail"
                    placeholder="E-mail"
                    type='email'
                    {...getFieldProps('email')}
                />
                <FormField 
                    label="Senha"
                    placeholder="Senha"
                    type="password"
                    {...getFieldProps('password')}
                />
                <div className="d-grid">
                    <CustomButton 
                        variant="danger"
                        type="submit"
                        loading={formik.isSubmitting || formik.isValidating}
                        disabled={formik.isSubmitting || formik.isValidating}
                    >Entrar</CustomButton>
                </div>
            </Form>
        </div>
    )
}