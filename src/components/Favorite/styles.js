import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;
  padding: 1.6rem 0;

  > img {
    width: 7.2rem;
    height: fit-content;
  }

  > div {
    h2 {
      font-family: ${({ theme }) => theme.FONTS.FONT_2};
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-weight: 500;
      font-size: 2rem;
      line-height: 160%;
    }
  
    button {
      color: ${({ theme }) => theme.COLORS.LIGHT_RED};
      font-size: 1.2rem;
      line-height: 160%;

      background: none;
      border: 0;
    }
  }

  @media (min-width: 1024px) {
    width: 23rem;
  }
`;