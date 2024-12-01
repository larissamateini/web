import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 7rem;
  width: 100%;
  
  display: flex;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  
  // button:last-child
  button:last-child {
    display: none;
  }

  @media (min-width: 600px) {
    height: 10rem;
  }
  
  @media (min-width: 1024px) {
    justify-content: space-between;
    gap: 3rem;
    padding: 2.4rem 12rem;

    .favorites {
      border: 0;
      background: none;
      line-height: 100%;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .new {
      padding: 2rem;
    }

    .new, .orders {
      max-width: 21rem;
    }

    button:last-child {
    display: block;
    background: none;
  }
  }
`;

export const Menu = styled.button`
  display: flex;
  align-items: center;
  gap: 2rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: none;
  margin-left: 2rem;
  background: none;

  .fi-menu-icon {
    width: 2.2rem;
    height: 2.2rem;
  }

  span {
    font-size: 2rem;
  }

  @media (min-width: 425px) {
    .fi-menu-icon {
      width: 3rem;
      height: 3rem;
    }
  }
`;

export const Logo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 16.1rem;
  }

  @media (min-width: 1024px) {
    width: auto;

    > img {
      width: 19.7rem;
    }
  }
`;

export const Logout = styled.button`
  width: 3rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: none;
`;