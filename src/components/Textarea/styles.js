import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 17.2rem;
  
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  
  padding: 1.4rem;
  border: none;
  border-radius: 0.8rem;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
  
  &:focus {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;