import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    font-size: 12px;
  }

  body {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
  }

  body, 
  input, 
  button, 
  textarea {
	  font-family: ${({ theme }) => theme.FONTS.FONT_1};
	  font-size: 1.6rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
  
  button, a {
    transition: filter .3s ease-out;
    cursor: pointer;
  }
  
  button:hover,
  a:hover {
    filter: brightness(1.15);
  }
`;
