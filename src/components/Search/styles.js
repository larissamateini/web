import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-grow: 1;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  padding-left: 1.4rem;
  border-radius: .5rem;
  
  &:focus-within {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  }
  
  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  input {
    max-width: 100%;

    &:focus {
      border: none;
      outline: none;
    }

    &:disabled {
      opacity: .5;
    }
  }
`;