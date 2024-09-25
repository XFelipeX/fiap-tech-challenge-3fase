import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import SearchBox from '../../components/SearchBox/SearchBox'

import {
  PostsContainer,
  CardContainer,
  Card,
  CardTitle,
  CardContent,
  CardPostInfo,
  CardAuthor,
  CardDate,
  PostButtons,
  ControlButtons,
  FeedBackMessage
} from './styles'

interface Post {
  id: number
  teachername: string
  title: string
  content: string
  createddate: string
}

const mockPosts: Post[] = [
  { id: 1, teachername: 'Felipe Dias', createddate: '06/09/2024', title: 'Título Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt leo id ultrices efficitur. Curabitur dapibus aliquet imperdiet. Donec pellentesque hendrerit ornare. Suspendisse a velit sed arcu ullamcorper lacinia. Curabitur pharetra magna id magna vehicula, non tempus purus porta. Integer quis tortor dignissim, interdum leo commodo, aliquet nunc. Ut sit amet sem blandit, faucibus orci vel, feugiat tellus. Aliquam velit velit, rhoncus id erat ullamcorper, ullamcorper rhoncus augue. Pellentesque at risus eget arcu auctor vehicula. Integer et elementum sem. Nullam aliquet pellentesque nisi, non bibendum nulla placerat ac. Duis a risus tincidunt, viverra elit ut, aliquet massa. Maecenas eget laoreet erat, non aliquet mi. Aenean gravida turpis tellus, vel dignissim magna ullamcorper et. Donec at massa quis odio accumsan volutpat.' },
  { id: 2, teachername: 'Sérgio Neto', createddate: '06/09/2024', title: 'Título Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt leo id ultrices efficitur. Curabitur dapibus aliquet imperdiet. Donec pellentesque hendrerit ornare. Suspendisse a velit sed arcu ullamcorper lacinia. Curabitur pharetra magna id magna vehicula, non tempus purus porta. Integer quis tortor dignissim, interdum leo commodo, aliquet nunc. Ut sit amet sem blandit, faucibus orci vel, feugiat tellus. Aliquam velit velit, rhoncus id erat ullamcorper, ullamcorper rhoncus augue. Pellentesque at risus eget arcu auctor vehicula. Integer et elementum sem. Nullam aliquet pellentesque nisi, non bibendum nulla placerat ac. Duis a risus tincidunt, viverra elit ut, aliquet massa. Maecenas eget laoreet erat, non aliquet mi. Aenean gravida turpis tellus, vel dignissim magna ullamcorper et. Donec at massa quis odio accumsan volutpat.' },
  { id: 3, teachername: 'Thiago Fialho', createddate: '06/09/2024', title: 'Título Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt leo id ultrices efficitur. Curabitur dapibus aliquet imperdiet. Donec pellentesque hendrerit ornare. Suspendisse a velit sed arcu ullamcorper lacinia. Curabitur pharetra magna id magna vehicula, non tempus purus porta. Integer quis tortor dignissim, interdum leo commodo, aliquet nunc. Ut sit amet sem blandit, faucibus orci vel, feugiat tellus. Aliquam velit velit, rhoncus id erat ullamcorper, ullamcorper rhoncus augue. Pellentesque at risus eget arcu auctor vehicula. Integer et elementum sem. Nullam aliquet pellentesque nisi, non bibendum nulla placerat ac. Duis a risus tincidunt, viverra elit ut, aliquet massa. Maecenas eget laoreet erat, non aliquet mi. Aenean gravida turpis tellus, vel dignissim magna ullamcorper et. Donec at massa quis odio accumsan volutpat.' },
]

const PostsListAdmin: React.FC = () => {
  const navigate = useNavigate()
  const [posts, setPosts] = useState<Post[]>(mockPosts)
  const [error,setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [search, setSearch] = useState<string>('')

	const handleSelectPost = (postId: number) => {
    console.log('Aqui redireciona para: ' + postId)
    navigate(`/posts/${postId}`)
  }

  useEffect(() => { 
    fectchPosts();
  },[])

  const fectchPosts = async () => {
    try {
      const response = await api.get('/posts');
      setPosts(response.data.posts);
    } catch (error: any) {
      setError(error.message)
    }finally {
      setLoading(false)
    }
  }

  const handleSearch = (term: string) => {
    setSearch(term);
  }
  
  const filteredPosts = posts.filter((post) => 
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.content.toLowerCase().includes(search.toLowerCase())
  )

  const deletePost = async (postId: number) => {
    const confirmation = confirm('Tem certeza que deseja excluir este post?')
    
    if(postId === undefined) return

    if (!confirmation) return

    try {
      console.log('Excluindo post: ', postId)
      await api.delete(`/posts/${postId}`)
      fectchPosts()
      alert('Post excluido com sucesso')

    } catch (error: any) {
      setError(error.message)
    }
  }


  if (filteredPosts.length == 0) {
    return (
      <>
        <SearchBox onSearch={handleSearch}/>
        <FeedBackMessage>Nenhum resultado encontrado</FeedBackMessage>
      </>
    )
  }
  if (loading) {
    return <FeedBackMessage>Carregando...</FeedBackMessage>
  }
  if(error) {
    return <FeedBackMessage>Error: {error}</FeedBackMessage>
  }

  return (
    <>
      <SearchBox onSearch={handleSearch}/>
      <PostsContainer>
        {filteredPosts.map((post) => (
          <CardContainer key={post.id}>
            <Card>
              <CardTitle onClick={() => handleSelectPost(post.id)}>{post.title}</CardTitle>
              <CardContent>{post.content}</CardContent>
              <CardPostInfo>
                <CardAuthor>Por {post.teachername}</CardAuthor>
                <CardDate>{post.createddate}</CardDate>
              </CardPostInfo>
            </Card>
            <PostButtons>
              <ControlButtons variant="edit" onClick={() => navigate(`/postsForm/${post.id}`)}>Editar post</ControlButtons>
              <ControlButtons variant="delete" onClick={() => deletePost(post.id)}>Excluir post</ControlButtons>
            </PostButtons>
          </CardContainer>
        ))}
      </PostsContainer>
    </>
  );
};

export default PostsListAdmin
