import { useNavigate } from 'react-router-dom'

import {
  Form,
  Label,
  Input,
  ErrorText,
  CheckboxContainer,
  InputCheckbox,
  LabelCheckbox,
  SubmitButton,
  BottomText,
  Link
} from "./styles";

import { ErrorMessage, Formik } from "formik";
import * as Yup from 'yup'

const validationSchema = Yup.object({ 
  name: Yup.string()
    .required('Por favor, informe o nome de usuário!'),

  password: Yup.string()
    .min(8, 'A senha deve possuir pelo menos 8 caracteres!')
    .required('Por favor, informe uma senha!'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'As duas senhas não coincidem')
    .required('Por favor, confirme a senha!')
})

const Cadastro: React.FC = () => {
  const navigate = useNavigate()

  const signUp = (values: unknown) => {
    console.log('Usuário Cadastrado: ', values)
  }

  const initialValues = {
    name: '',
    password: '',
    confirmPassword: ''
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={signUp}
        validationSchema={validationSchema}
      >
        <Form>

          <Label htmlFor="name">Nome de usuário</Label>
          <Input type="text" name="name" id="name" required />
          <ErrorMessage name="name" component={ErrorText} />

          <Label htmlFor="password">Senha</Label>
          <Input type="password" name="password" id="password" required />
          <ErrorMessage name="password" component={ErrorText} />

          <Label htmlFor="confirmPassword">Confirme a senha</Label>
          <Input type="password" name="confirmPassword" id="confirmPassword" required />
          <ErrorMessage name="confirmPassword" component={ErrorText} />

          <CheckboxContainer>
            <InputCheckbox type="checkbox" name="terms" id="terms" required />
            <LabelCheckbox htmlFor="terms">
              Li e concordo com os <Link>termos</Link>.
            </LabelCheckbox>
          </CheckboxContainer>

          <SubmitButton type="submit">Cadastrar</SubmitButton>
        </Form>
      </Formik>

      <BottomText>Já tem cadastro? <Link onClick={() => navigate(`/login`)}>Entre</Link></BottomText>
    </>
  );
};

export default Cadastro;