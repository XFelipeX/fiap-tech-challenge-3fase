import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PostsList from '../pages/PostsList/PostsList'
import PostDetail from '../pages/PostDetail/PostDetail'
import PostsForm from '../pages/PostsForm/PostsForm'
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/postsForm/" element={<PostsForm />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signUp" element={<SignUp />}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes
