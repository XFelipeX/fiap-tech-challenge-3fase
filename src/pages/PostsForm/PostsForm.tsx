import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import { api } from '../../services/api'
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

// const mockAuthors: OptionsData[] = [
// 	{label: 'Felipe Dias', value: '1'},
// 	{label: 'Sérgio Neto', value: '2'},
// 	{label: 'Thiago Fialho', value: '3'},
// ];

const PostsForm: React.FC = () => {
	const navigate = useNavigate()

	const [options, setOptions] = useState<OptionsData[]>([])
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await api.get('/teachers');
				const teachers = response.data.map((teacher: { name: any; id: any; }) => ({
					label: teacher.name,
					value: teacher.id
				}))
				setOptions(teachers)

      } catch (error: any) {
        setError(error.message)
      }
    }

    fetchTeachers();
  }, [])

	const createPost = async (values: any) => {
		const title = values.title
		const author = values.author
		const content = values.content
		
		try {
			const response = await api.post('/posts', {
				title: title,
				teacherId: author,
				content: content
			});
			navigate('/posts')

		} catch (error: any) {
			setError(error.message)
		}
	}

	if(error) {
    return <p>Error: {error}</p>
  }

  return (
		<PostsContainer>
			<FormContainer>
				<Formik
					initialValues={{ title: '', author: '', content:'' }}
					validationSchema={validations}
					onSubmit={createPost}
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
