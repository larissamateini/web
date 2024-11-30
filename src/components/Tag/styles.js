import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.4rem;
  line-height: 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};

  padding: .4rem .8rem;
  border-radius: .5rem;
`;
