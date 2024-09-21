import React, { useState } from 'react'

import {
  HeaderContainer,
  HeaderTitle,
  HeaderButton,
  HeaderSidebar,
  HeaderSidebarLink
} from './styles'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  };

  return (
    <>
      <HeaderContainer>
        <HeaderButton onClick={toggleMenu}>☰</HeaderButton>
        <HeaderTitle>Blog Tech Challenge - Grupo 37</HeaderTitle>
      </HeaderContainer>

      <HeaderSidebar isOpen={isOpen}>
        <HeaderSidebarLink  onClick={toggleMenu}>X</HeaderSidebarLink>
        <HeaderSidebarLink href="/">Posts</HeaderSidebarLink>
        <HeaderSidebarLink href="/postsForm">Criar Posts</HeaderSidebarLink>
        <HeaderSidebarLink href="/">Professores</HeaderSidebarLink>
        <HeaderSidebarLink href="/postsAdmin">Administrar posts</HeaderSidebarLink>
      </HeaderSidebar>
    </>
  );
};

export default Header
