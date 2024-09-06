import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostsList from '../pages/PostsList/PostsList';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/:id" element={<PostsList />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;