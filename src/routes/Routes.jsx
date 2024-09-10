import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PostsList from '../pages/PostsList/PostsList'
import PostDetail from '../pages/PostDetail/PostDetail'
import PostsForm from '../pages/PostsForm/PostsForm'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/postsForm/" element={<PostsForm />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes
