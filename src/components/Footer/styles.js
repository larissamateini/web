import styled from "styled-components";

export const Container = styled.footer`
  height: 7.7rem;
  width: 100%;
  grid-area: footer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  @media (min-width: 425px) {
    gap: 1.4rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2.5rem;
  }

  @media (min-width: 1024px) {
    padding: 1rem 13rem;
    justify-content: space-between;
  }
`;

export const LogoFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 12rem;
  }

  @media (min-width: 425px) {
    > img {
      width: 15rem;
    }
  }

  @media (min-width: 768px) {
    > img {
      width: 100%;
    }
  }

  @media (min-width: 1024px) {
    > img {
      width: 18rem;
    }
  }
`;

export const FooterC = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  text-align: center;

  @media (min-width: 425px) {
    font-size: 1.4rem;
  }

  @media (min-width: 425px) {
    font-size: 1.6rem;
  }
  
  
  @media (min-width: 1024px) {
    font-size: 1.8rem;
    line-height: 160%;
  }
`;