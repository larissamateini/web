import styled from "styled-components";

export const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 2rem;

  @media (min-width: 425px) {
    padding: 4rem;
    gap: 6rem;
  }

  @media (min-width: 600px) {
    padding: 8rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem;
  }
`;

export const Logo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  > img {
    width: 100%;
  }

  @media (min-width: 425px) {
    img {
      width: 75%;
    }
  }

  @media (min-width: 700px) {
    img {
      width: 50%;
    }
  }

  @media (min-width: 1024px) {
    > img {
      width: 75%;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  > h2 {
    display: none;
  }

  > section input {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    border-radius: .8rem;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: ${({ theme }) => theme.FONTS.FONT_2};
    font-size: 1.3rem;
    text-align: center;
    line-height: 2rem;
  }

  @media (min-width: 425px) {
    gap: 3.2rem;
  }

  @media (min-width: 700px) {
    gap: 3.5rem;
  }
  
  @media (min-width: 1024px) {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    padding: 4rem;
    border-radius: 1.8rem;
    

    > h2 {
      display: inline;
      margin-bottom: 1rem;

      font-family: ${({ theme }) => theme.FONTS.FONT_2};
      font-size: 3rem;
      font-weight: 500;
      text-align: center;
    }
  }
`;
