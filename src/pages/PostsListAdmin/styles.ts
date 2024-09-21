import styled from 'styled-components'
import theme from '../../styles/theme'

const colorType = {
  cardBackgroundColor: theme.colors.cardBackgroundColor,
  authorDateColor: theme.colors.authorDateColor,
  standardFont: theme.colors.standardFont,
  separatorLine: theme.colors.authorDateColor
}

export const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  color: ${colorType.standardFont};
`;

export const CardContainer = styled.div`
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 70%;

  @media (max-width: 600px) {
    width: 95%;
  }
`;

export const Card = styled.div`
  background-color: ${colorType.cardBackgroundColor};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom: 1px solid ${colorType.separatorLine};
  padding: 20px;
  width: calc(100% - 40px);
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin: 0px;
  cursor: pointer;
`;

export const CardContent = styled.p`
  font-size: 1rem;
  margin: 10px 0px 0px 0px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  @media (max-width: 600px) {
    -webkit-line-clamp: 6;
  }
`;

export const CardPostInfo = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const CardAuthor = styled.p`
  width: 50%;
  font-size: 1rem;
  color: ${colorType.authorDateColor};
  margin: 10px 0px 0px 0px;

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
`;

export const CardDate = styled.p`
  width: 50%;
  font-size: 1rem;
  color:${colorType.authorDateColor};
  margin: 10px 0px 0px 0px;
  text-align: right;

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
`;

export const PostButtons = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colorType.cardBackgroundColor};
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 15px 20px;
`;

export const ControlButtons = styled.button`
  color: ${colorType.standardFont};
  font-weight: bold;
  border: none;
  border-radius: 3px;
  background-color: ${({ variant }) => variant == 'delete' ? '#EE2E39' : '#2A93F4'};
  padding: 10px 15px;
  cursor: pointer;
`;

export const FeedBackMessage = styled.p`
  margin-top: 10%;
  color: ${colorType.standardFont};
  font-weight: bold;
  text-align: center;
`;