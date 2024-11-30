import styled from "styled-components";

export const Container = styled.div`
  max-width: 21rem;
  height: 29.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  position: relative;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  padding: 2.4rem;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 0.8rem;

  svg {
    cursor: pointer;
  }

  > svg {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > img {
    max-width: 8.8rem;
    margin-top: ${({ isAdmin }) => isAdmin ? "4.5rem" : "none"};
    cursor: pointer;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.TINTS_CAKE_100};
    line-height: 100%;
    margin-bottom: ${({ isAdmin }) => isAdmin ? "4.5rem" : "none"};
  }

  @media (min-width: 1024px) {
    max-width: 30.4rem;
    height: 100%;
    gap: 1.5rem;

    > svg {
      right: 1.8rem;
    }

    > img {
      max-width: 17.6rem;
      margin-top: ${({ isAdmin }) => isAdmin ? "3.2rem" : "none"};
    }
    
    > p {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      text-align: center;
      line-height: 160%;
      overflow: hidden;
    }

    > span {
      font-size: 3.2rem;
      line-height: 160%;
      margin-bottom: ${({ isAdmin }) => isAdmin ? "3.2rem" : "none"};
    }
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  > h2 {
    width: 100%;

    font-family: ${({ theme }) => theme.FONTS.FONT_2};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    text-align: center;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (min-width: 1024px) {
    > h2 {
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 140%;
    }
  }
`;

export const Order = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  > button {
    padding: .4rem 2.4rem;
  }

  @media (min-width: 1024px) {
    width: fit-content;
    flex-direction: row;

    > button {
      padding: 1.2rem 2.4rem;
    }
  }
`;
