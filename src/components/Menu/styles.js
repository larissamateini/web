import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 10;

  display: grid;
  grid-template-rows: 10rem auto; 
  grid-template-areas:
    "header"
    "content";

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  visibility: ${({ isMenuOpen }) => (isMenuOpen ? "visible" : "hidden")};
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? "1" : "0")};
  transition: opacity .8s ease-in-out, visibility .8s ease-in-out;

  > main {
    width: calc(100% - 5.6rem);
    grid-area: content;
    justify-self: center;
    margin: 3.6rem 2.8rem 1.4rem;

    > div {
      margin-bottom: 3.6rem;

      input {
        max-width: 100%;
      }
    }

    button {
      width: 100%;
      font-weight: 400;
      padding: 1rem;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    }
  }
`;
