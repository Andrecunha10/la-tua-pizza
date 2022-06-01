import { FormField } from "../../components/formfield";
import { TitleH2 } from "../../components/titles";

export function Register (){
    return(
        <div className="mt-4 mt-lg-0 w-100">
            <TitleH2>Login</TitleH2>
            
                <FormField
                    controlId="Username" 
                    label="Nome"
                    placeholder="Nome *"
                    // error='preencha o seu nome'
                    // isInvalid
                    mask={[
                        { mask: '(00) 00000-0000' }
                    ]}
                />
           
        </div>
    )
}