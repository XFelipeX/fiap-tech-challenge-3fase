import styled from 'styled-components'
import theme from '../../styles/theme'

const colorType = {
  headerBackground: theme.colors.headerBackground,
  headerFontColor: theme.colors.headerFontColor,
}

export const HeaderContainer = styled.header`
  background-color: ${colorType.headerBackground};
  padding: 15px;
  color: ${colorType.headerFontColor};
  display: flex;
  align-items: center;
  position: relative;
`;

export const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  margin-left: 15px;
`;

export const HeaderButton = styled.button`
  background: none;
  border: none;
  color: ${colorType.headerFontColor};
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    opacity: 80%;
  }
`;

export const HeaderSidebar = styled.nav<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-250px')};
  width: 250px;
  height: 100vh;
  background-color: ${colorType.headerBackground};
  color: ${colorType.headerFontColor};
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  padding: 20px;
  transition: left 1s ease-in-out;
`;

export const HeaderSidebarLink = styled.a`
  color: ${colorType.headerFontColor};
  text-decoration: none;
  margin-bottom: 20px;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const HeaderOverlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;