import { useNavigate } from 'react-router-dom'

import {
  Form,
  Label,
  Input,
  ErrorText,
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
})

const Login: React.FC = () => {
  const navigate = useNavigate()

  const login = (values: unknown) => {
    console.log('Usuário logado: ', values)
  }

  const initialValues = {
    name: '',
    password: ''
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={login}
        validationSchema={validationSchema}
      >
        <Form>

          <Label htmlFor="name">Nome de usuário</Label>
          <Input type="text" name="name" id="name" required />
          <ErrorMessage name="name" component={ErrorText} />

          <Label htmlFor="password">Senha</Label>
          <Input type="password" name="password" id="password" required />
          <ErrorMessage name="password" component={ErrorText} />

          <SubmitButton type="submit">Entrar</SubmitButton>
        </Form>
      </Formik>

      <BottomText>Não tem cadastro? <Link onClick={() => navigate(`/signUp`)}>Cadastre-se</Link></BottomText>
    </>
  );
};

export default Login;