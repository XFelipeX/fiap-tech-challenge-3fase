import styled from 'styled-components'
import theme from '../../styles/theme'

const colorType = {
  inputBackground: theme.colors.inputBackground,
  headerFontColor: theme.colors.headerFontColor,
  blackFont: theme.colors.blackFont,
	borderShadow: theme.colors.borderShadow,
}

export const InputGroup = styled.div`
  width: 100%;
  position: relative;
  padding: 10px;
`;

export const InputField = styled.input`
  width: 100%;
  border-radius: 1rem;
  background: ${colorType.inputBackground};
  padding: 1rem;
  font-size: 1rem;
  color: ${colorType.blackFont};
  transition: border 150ms cubic-bezier(0.4,0,0.2,1);
	margin: 10px 0 0 0;

	&:focus {
		outline: none;
  	border: 1.5px solid ${colorType.borderShadow};
	}

	&:valid {
    outline: none;
    border: 1.5px solid ${colorType.borderShadow};
  }
`;

export const InputTextArea = styled.textarea`
  width: 100%;
  border-radius: 1rem;
  background: ${colorType.inputBackground};
  padding: 1rem;
  font-size: 1rem;
  color: ${colorType.blackFont};
  transition: border 150ms cubic-bezier(0.4,0,0.2,1);
	margin: 10px 0 0 0;

	&:focus {
		outline: none;
  	border: 1.5px solid ${colorType.borderShadow};
	}

	&:valid {
    outline: none;
    border: 1.5px solid ${colorType.borderShadow};
  }
`;

export const InputSelect = styled.select`
  width: 100%;
  border-radius: 1rem;
  background: ${colorType.inputBackground};
  padding: 1rem;
  font-size: 1rem;
  color: ${colorType.blackFont};
  transition: border 150ms cubic-bezier(0.4,0,0.2,1);
	margin: 10px 0 0 0;

	&:focus {
		outline: none;
  	border: 1.5px solid ${colorType.borderShadow};
	}

	&:valid {
    outline: none;
    border: 1.5px solid ${colorType.borderShadow};
  }
`;

export const InputLabel = styled.label`
	left: 15px;
	padding: 0 0.2em;
	pointer-events: none;
	transition: 150ms cubic-bezier(0.4,0,0.2,1);

  background-color: inherit;
  color: ${colorType.headerFontColor};
  transition: all 0.2s ease-in-out;
`;