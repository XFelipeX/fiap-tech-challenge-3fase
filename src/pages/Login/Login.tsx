import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {
  Form,
  Label,
  Input,
  ErrorText,
  SubmitButton
} from "./styles";
import {api} from '../../services/api'
import { useAuth } from '../../context/AuthContext'

import { ErrorMessage, Formik } from "formik";
import * as Yup from 'yup'

const validationSchema = Yup.object({ 
  email: Yup.string()
    .required('Por favor, informe o email de usuário!'),

  password: Yup.string()
    .min(4, 'A senha deve possuir pelo menos 8 caracteres!')
    .required('Por favor, informe uma senha!'),
})

interface FormValues {
  email: string
  password: string
}

const Login: React.FC = () => {
  const navigate = useNavigate()
  const [formData] = useState<FormValues>({ email: '', password: '' })
  const [error, setError] = useState<string | null>(null)
  const { login} = useAuth();
  

  function handleLogin(values:FormValues) {
    api.post('/auth/login', values)
      .then(response => {
        login()
        localStorage.setItem('token', response.data.token)
        navigate('/posts')
      })
      .catch(error => {
        setError('Usuário e/ou senha inválidos.')
        console.error('Erro ao logar o usuário: ', error)
      })
  }

  return (
    <>
      <Formik
        initialValues={formData}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        <Form>

          <Label htmlFor="email">Nome de usuário</Label>
          <Input type="email" name="email" id="email" required />
          <ErrorMessage name="email" component={ErrorText} />

          <Label htmlFor="password">Senha</Label>
          <Input type="password" name="password" id="password" required />
          <ErrorMessage name="password" component={ErrorText} />

          <SubmitButton type="submit">Entrar</SubmitButton>
        </Form>
      </Formik>
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
};

export default Login;