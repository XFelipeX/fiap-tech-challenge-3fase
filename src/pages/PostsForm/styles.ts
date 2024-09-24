import styled from 'styled-components'
import theme from '../../styles/theme'

const colorType = {
  cardBackgroundColor: theme.colors.cardBackgroundColor,
  authorDateColor: theme.colors.authorDateColor,
  standardFont: theme.colors.standardFont,
  buttonColor: theme.colors.buttonColor,
}

export const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  color: ${colorType.standardFont};
`;

export const FormContainer = styled.div`
  width: 70%;
  border-radius: 10px;
  padding: 15px;
  display: flow-root;
  border: 1px;
  margin-bottom: 25px;

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
`;

export const FormButton = styled.button`
  width: 200px;
  background-color: ${colorType.buttonColor};
  font-size: 15px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.7s;
  border: none;
  color: ${colorType.standardFont};
  padding: 0.7rem;
  margin: 10px 0;

  @media (max-width: 200px) {
    width: 150px;
  }

  &:hover {
    opacity: 80%;
  }
`;