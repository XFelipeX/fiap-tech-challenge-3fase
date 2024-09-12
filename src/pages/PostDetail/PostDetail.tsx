import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../services/api'

import {
  PostsContainer,
  Card,
  CardTitle,
  CardContent,
  CardPostInfo,
  CardAuthor,
  CardDate,
} from './styles'

interface Post {
	id: number
	teachername: string
	title: string
	content: string
	createddate: string
}

// const mockPosts: Post[] = [
//   { id: 1, authorName: 'Felipe Dias', createdDate: '06/09/2024', title: 'Título Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt leo id ultrices efficitur. Curabitur dapibus aliquet imperdiet. Donec pellentesque hendrerit ornare. Suspendisse a velit sed arcu ullamcorper lacinia. Curabitur pharetra magna id magna vehicula, non tempus purus porta. Integer quis tortor dignissim, interdum leo commodo, aliquet nunc. Ut sit amet sem blandit, faucibus orci vel, feugiat tellus. Aliquam velit velit, rhoncus id erat ullamcorper, ullamcorper rhoncus augue. Pellentesque at risus eget arcu auctor vehicula. Integer et elementum sem. Nullam aliquet pellentesque nisi, non bibendum nulla placerat ac. Duis a risus tincidunt, viverra elit ut, aliquet massa. Maecenas eget laoreet erat, non aliquet mi. Aenean gravida turpis tellus, vel dignissim magna ullamcorper et. Donec at massa quis odio accumsan volutpat.' },
//   { id: 2, authorName: 'Sérgio Neto', createdDate: '06/09/2024', title: 'Título Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt leo id ultrices efficitur. Curabitur dapibus aliquet imperdiet. Donec pellentesque hendrerit ornare. Suspendisse a velit sed arcu ullamcorper lacinia. Curabitur pharetra magna id magna vehicula, non tempus purus porta. Integer quis tortor dignissim, interdum leo commodo, aliquet nunc. Ut sit amet sem blandit, faucibus orci vel, feugiat tellus. Aliquam velit velit, rhoncus id erat ullamcorper, ullamcorper rhoncus augue. Pellentesque at risus eget arcu auctor vehicula. Integer et elementum sem. Nullam aliquet pellentesque nisi, non bibendum nulla placerat ac. Duis a risus tincidunt, viverra elit ut, aliquet massa. Maecenas eget laoreet erat, non aliquet mi. Aenean gravida turpis tellus, vel dignissim magna ullamcorper et. Donec at massa quis odio accumsan volutpat.' },
//   { id: 3, authorName: 'Thiago Fialho', createdDate: '06/09/2024', title: 'Título Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt leo id ultrices efficitur. Curabitur dapibus aliquet imperdiet. Donec pellentesque hendrerit ornare. Suspendisse a velit sed arcu ullamcorper lacinia. Curabitur pharetra magna id magna vehicula, non tempus purus porta. Integer quis tortor dignissim, interdum leo commodo, aliquet nunc. Ut sit amet sem blandit, faucibus orci vel, feugiat tellus. Aliquam velit velit, rhoncus id erat ullamcorper, ullamcorper rhoncus augue. Pellentesque at risus eget arcu auctor vehicula. Integer et elementum sem. Nullam aliquet pellentesque nisi, non bibendum nulla placerat ac. Duis a risus tincidunt, viverra elit ut, aliquet massa. Maecenas eget laoreet erat, non aliquet mi. Aenean gravida turpis tellus, vel dignissim magna ullamcorper et. Donec at massa quis odio accumsan volutpat.' },
// ]

const PostDetail: React.FC = () => {
	const { id } = useParams<{ id: string }>()
	const [post, setPost] = useState<Post>()
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await api.get(`/posts/${id}`)
				setPost(response.data.currentPost)
			} catch (error: any) {
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}
		fetchPost();
	}, [id])

	if (loading) {
		return <p>Carregando...</p>
	}
	if (error) {
		return <p>Error: {error}</p>
	}

  return (
    <PostsContainer>
			<Card key={post?.id}>
				<CardTitle>{post?.title}</CardTitle>
				<CardContent>{post?.content}</CardContent>
				<CardPostInfo>
					<CardAuthor>Por {post?.teachername}</CardAuthor>
					<CardDate>{post?.createddate}</CardDate>
				</CardPostInfo>
			</Card>
    </PostsContainer>
  );
};

export default PostDetail
