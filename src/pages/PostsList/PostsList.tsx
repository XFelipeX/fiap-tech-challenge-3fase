import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
  authorName: string
  title: string
  content: string
  createdDate: string
}

const mockPosts: Post[] = [
  { id: 1, authorName: 'Felipe Dias', createdDate: '06/09/2024', title: 'Título Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt leo id ultrices efficitur. Curabitur dapibus aliquet imperdiet. Donec pellentesque hendrerit ornare. Suspendisse a velit sed arcu ullamcorper lacinia. Curabitur pharetra magna id magna vehicula, non tempus purus porta. Integer quis tortor dignissim, interdum leo commodo, aliquet nunc. Ut sit amet sem blandit, faucibus orci vel, feugiat tellus. Aliquam velit velit, rhoncus id erat ullamcorper, ullamcorper rhoncus augue. Pellentesque at risus eget arcu auctor vehicula. Integer et elementum sem. Nullam aliquet pellentesque nisi, non bibendum nulla placerat ac. Duis a risus tincidunt, viverra elit ut, aliquet massa. Maecenas eget laoreet erat, non aliquet mi. Aenean gravida turpis tellus, vel dignissim magna ullamcorper et. Donec at massa quis odio accumsan volutpat.' },
  { id: 2, authorName: 'Sérgio Neto', createdDate: '06/09/2024', title: 'Título Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt leo id ultrices efficitur. Curabitur dapibus aliquet imperdiet. Donec pellentesque hendrerit ornare. Suspendisse a velit sed arcu ullamcorper lacinia. Curabitur pharetra magna id magna vehicula, non tempus purus porta. Integer quis tortor dignissim, interdum leo commodo, aliquet nunc. Ut sit amet sem blandit, faucibus orci vel, feugiat tellus. Aliquam velit velit, rhoncus id erat ullamcorper, ullamcorper rhoncus augue. Pellentesque at risus eget arcu auctor vehicula. Integer et elementum sem. Nullam aliquet pellentesque nisi, non bibendum nulla placerat ac. Duis a risus tincidunt, viverra elit ut, aliquet massa. Maecenas eget laoreet erat, non aliquet mi. Aenean gravida turpis tellus, vel dignissim magna ullamcorper et. Donec at massa quis odio accumsan volutpat.' },
  { id: 3, authorName: 'Thiago Fialho', createdDate: '06/09/2024', title: 'Título Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt leo id ultrices efficitur. Curabitur dapibus aliquet imperdiet. Donec pellentesque hendrerit ornare. Suspendisse a velit sed arcu ullamcorper lacinia. Curabitur pharetra magna id magna vehicula, non tempus purus porta. Integer quis tortor dignissim, interdum leo commodo, aliquet nunc. Ut sit amet sem blandit, faucibus orci vel, feugiat tellus. Aliquam velit velit, rhoncus id erat ullamcorper, ullamcorper rhoncus augue. Pellentesque at risus eget arcu auctor vehicula. Integer et elementum sem. Nullam aliquet pellentesque nisi, non bibendum nulla placerat ac. Duis a risus tincidunt, viverra elit ut, aliquet massa. Maecenas eget laoreet erat, non aliquet mi. Aenean gravida turpis tellus, vel dignissim magna ullamcorper et. Donec at massa quis odio accumsan volutpat.' },
]

const PostsList: React.FC = () => {
  const navigate = useNavigate()
  const [posts, setPosts] = useState<Post[]>(mockPosts)

	const handleSelectPost = (postId: number) => {
    console.log('Aqui redireciona para: ' + postId)
    navigate(`/posts/${postId}`)
  }

  return (
    <PostsContainer>
      {posts.map((post) => (
        <Card key={post.id}>
          <CardTitle onClick={() => handleSelectPost(post.id)}>{post.title}</CardTitle>
          <CardContent>{post.content}</CardContent>
          <CardPostInfo>
            <CardAuthor>Por {post.authorName}</CardAuthor>
            <CardDate>{post.createdDate}</CardDate>
          </CardPostInfo>
        </Card>
      ))}
    </PostsContainer>
  );
};

export default PostsList
