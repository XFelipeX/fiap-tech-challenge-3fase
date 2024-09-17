import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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

interface Post {
	id: number
	teachername: string
	title: string
	content: string
	createddate: string
}

const validations = Yup.object({
  title: Yup.string()
    .required('O título é obrigatório'),
  author: Yup.string()
    .required('O autor é obrigatório'),
	content: Yup.string()
    .required('O conteúdo é obrigatório'),
})

const PostsForm: React.FC = () => {
	const navigate = useNavigate()
	const { id } = useParams<{ id: string }>()
	const [options, setOptions] = useState<OptionsData[]>([])
	const [formData, setFormData] = useState({ title: '', author: '', content: '' })
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

	useEffect(() => {
		if (id) {
			const fetchPost = async () => {
				try {
					const response = await api.get(`/posts/${id}`)
					const currentPost = response.data.currentPost
					setFormData({
						title: currentPost?.title ?? '',
						author: currentPost?.teacherId ?? '',
						content: currentPost?.content ?? ''
					})

				} catch (error: any) {
					setError(error.message)
				}
			}
			fetchPost();
		}
	}, [id])

	const createPost = async (values: any) => {
		const { title, author, content } = values
		
		try {
			await api.post('/posts', {
				title: title,
				teacherId: author,
				content: content
			});
			navigate('/posts')

		} catch (error: any) {
			setError(error.message)
		}
	}

	const updatePost = async (values: any) => {
		const { title, author, content } = values
		
		try {
			await api.put(`/posts/${id}`, {
				title: title,
				teacherId: author,
				content: content
			});

		} catch (error: any) {
			setError(error.message)
		}
		navigate('/posts')
	}

	if(error) {
    return <p>Error: {error}</p>
  }

  return (
		<PostsContainer>
			<FormContainer>
				<Formik
					initialValues={formData}
					enableReinitialize={true}
					validationSchema={validations}
					onSubmit={id ? updatePost : createPost}
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
