import { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import Input from '../../components/Input/Input'

import {
	PostsContainer,
	FormContainer,
	FormButton,
} from './styles'

interface OptionsData {
  value: string
  label: string
}

const validations = Yup.object({
  title: Yup.string()
    .required('O título é obrigatório'),
  author: Yup.string()
    .required('O autor é obrigatório'),
	content: Yup.string()
    .required('O conteúdo é obrigatório'),
})

const mockAuthors: OptionsData[] = [
	{label: 'Felipe Dias', value: '1'},
	{label: 'Sérgio Neto', value: '2'},
	{label: 'Thiago Fialho', value: '3'},
];

const PostsForm: React.FC = () => {
	const [options, setOptions] = useState<OptionsData[]>([])
	useEffect(() => {
		setOptions(mockAuthors)
	})

  return (
		<PostsContainer>
			<FormContainer>
				<Formik
					initialValues={{ title: '', author: '', content:'' }}
					validationSchema={validations}
					onSubmit={(values) => {
						console.log('values:' + JSON.stringify(values));
					}}
				>
					{({ isSubmitting }) => (
						<Form>
							<Input label="Título" name="title" options={options} />
							<Input type="select" label="Autor" name="author" options={options} />
							<Input type="textarea" label="Conteúdo" name="content" options={options} />

							<FormButton type="submit" disabled={isSubmitting}>
								Enviar
							</FormButton>
						</Form>
					)}
				</Formik>
			</FormContainer>
		</PostsContainer>
  );
}

export default PostsForm
