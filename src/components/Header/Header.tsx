import React, { useState } from 'react';

import {
  HeaderContainer,
  HeaderTitle,
  HeaderButton,
  HeaderSidebar,
  HeaderSidebarLink,
  HeaderOverlay,
} from './styles'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeaderContainer>
        <HeaderTitle>Blog Tech Challenge - Grupo 37</HeaderTitle>
        <HeaderButton onClick={toggleMenu}>☰</HeaderButton>
      </HeaderContainer>

      <HeaderOverlay isOpen={isOpen} onClick={toggleMenu} />

      <HeaderSidebar isOpen={isOpen}>
        <HeaderSidebarLink href="/">Posts</HeaderSidebarLink>
        <HeaderSidebarLink href="/">Criar Posts</HeaderSidebarLink>
        <HeaderSidebarLink href="/">Professores</HeaderSidebarLink>
      </HeaderSidebar>
    </>
  );
};

export default Header;
