import styled from "styled-components";

export const Container = styled.section`
  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-weight: 400;
    font-size: 1.6rem;
    margin-bottom: 1.6rem;
  }
`;