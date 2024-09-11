import styled from 'styled-components';
import theme from '../../styles/theme'
import { Form as FormikForm, Field } from  "formik"

const colorType = {
  mainContrastColor: theme.colors.buttonColor,
  standardFont: theme.colors.standardFont,
  brightBackground: theme.colors.brightBackground
}

export const Form = styled(FormikForm)`
  display: flex;
  width: 35%;
  margin: 100px auto 0px auto;
  flex-direction: column;
  @media (max-width: 1366px) {
    width: 40%;
    margin: 0px auto 0px auto;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const Label = styled.label`
  color: ${colorType.mainContrastColor};
  font-weight: bold;
  font-size: 20px;
  margin: 30px 0px 11px 0px;
  @media (max-width: 1366px) {
    font-size: 16px;
  }
`;

export const Input = styled(Field)`
  height: 40px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 20px;
  background-color: ${colorType.brightBackground};
  padding: 5px 10px;
  @media (max-width: 1366px) {
    height: 35px;
    font-size: 16px;
  }
`;

export const ErrorText = styled.p`
  color: #EE2E39;
  margin-bottom: 0px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 50px;
  @media (max-width: 1366px) {
    margin-top: 30px;
  }
`;

export const InputCheckbox = styled.input`
  width: 25px;
  height: 25px;
  align-self: start;
`;

export const LabelCheckbox = styled.label`
  font-size: 18px;
  color: ${colorType.standardFont};
  @media (max-width: 1366px) {
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button`
  display: inline;
  width: 300px;
  font-size: 24px;
  color: ${colorType.standardFont};
  font-weight: bold;
  border-radius: 8px;
  border: none;
  background-color: ${colorType.mainContrastColor};
  margin: 80px auto 50px auto;
  padding: 17px 0px;
  cursor: pointer;
  @media (max-width: 1366px) {
    font-size: 20px;
    width: 200px;
    margin: 50px auto 20px auto;
    padding: 13px 0px;
  }
  @media (max-width: 600px) {
    margin: 40px auto 20px auto;
    width: 50%;
  }
`;

export const BottomText = styled.p`
  color: ${colorType.standardFont};
  font-weigth: bold;
  font-size: 20px;
  text-align: center;
`;

export const Link = styled.span`
  text-decoration: underline;
  color: ${colorType.mainContrastColor};
  cursor: pointer;
`;