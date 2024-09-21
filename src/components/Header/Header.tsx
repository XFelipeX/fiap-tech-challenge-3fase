import React, { useState ,useEffect} from 'react'
import {
  HeaderContainer,
  HeaderTitle,
  HeaderButton,
  HeaderSidebar,
  HeaderSidebarLink,
  AuthButton
} from './styles'
import { useAuth } from '../../context/AuthContext';

import { api } from '../../services/api';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isAuthenticated,login,logout} = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  };

  function handleLogout() {
    logout();
    localStorage.removeItem('token');
  }

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await api.get('/auth/verify-Token')
        if (response.status === 200) {
          login();
        }
      } catch (error) {
          logout();
      }
    }

    verifyToken();
  },[isAuthenticated,login,logout])   

  return (
    <>
      <HeaderContainer>
        <HeaderButton onClick={toggleMenu}>☰</HeaderButton>
        <HeaderTitle>Blog Tech Challenge - Grupo 37</HeaderTitle>
        {!isAuthenticated ?  <AuthButton href='/login'>Login</AuthButton> : <AuthButton onClick={handleLogout}>Logout</AuthButton>}
       
      </HeaderContainer>

      <HeaderSidebar isOpen={isOpen}>
        <HeaderSidebarLink  onClick={toggleMenu}>X</HeaderSidebarLink>
        <HeaderSidebarLink href="/">Posts</HeaderSidebarLink>
        {isAuthenticated && <>
          <HeaderSidebarLink href="/postsForm">Criar Posts</HeaderSidebarLink>
        <HeaderSidebarLink href="/">Professores</HeaderSidebarLink>
        <HeaderSidebarLink href="/postsAdmin">Administrar posts</HeaderSidebarLink>
        </>}
     
      </HeaderSidebar>
    </>
  );
};

export default Header
