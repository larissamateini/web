import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding-right: 1.6rem;
  border-radius: .8rem;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.LIGHT_600};
  outline: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
  
  > button {
    display: flex;
    align-items: center;

    color: ${({ theme, isNew }) => isNew ? theme.COLORS.LIGHT_500 :theme.COLORS.LIGHT_100};
    background: none;
    border: none;
  }
  
  > input {
    width: 100%;
    height: 3.2rem;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    padding: 0.8rem 0.8rem 0.8rem 1.6rem;
    
    border: none;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;