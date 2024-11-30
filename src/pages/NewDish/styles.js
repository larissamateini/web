import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";
  
  > main {
    width: 100%;
    grid-area: content;
    justify-self: center;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    padding: .8rem;
    border-radius: .8rem;
    
    &:focus-within {
      outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    input {
      background-color: transparent;
    }
  }

  .price {
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  .save {
    > button {
      padding: 1.2rem 2.4rem;
  
      &:disabled {
        opacity: 1;
        background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
      }
    }
  }
  
  @media (min-width: 1024px) {
    height: 100vh;
    grid-template-rows: 9.6rem auto 7.7rem;

    > main {
      overflow-y: auto;

      ::-webkit-scrollbar {
        width: .8rem;
      }

      ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        border-radius: .8rem;
      }
    }

    .save-changes {
      justify-content: flex-end;

      > button {
        max-width: 17.2rem;
      }
    }
  }
`;

export const Form = styled.form`
  width: calc(100% - 6.4rem);
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  margin: 1.1rem 3.2rem 5.3rem;

  > header {
    display: flex;
    flex-direction: column;

    h1 {
      margin-top: 2.4rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: ${({ theme }) => theme.FONTS.FONT_2};
      font-weight: 500;
      line-height: 140%;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    section {
      width: 100%;
    }

    section input {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      border-radius: .8rem;
    }
  }

  @media (min-width: 1024px) {
    width: calc(100% - 24.8rem);
    gap: 3.2rem;
    margin: 4rem 12.4rem 11.6rem;

    > div {
      flex-direction: row;
      gap: 3.2rem;

      :first-of-type {
        section:nth-of-type(1) {
          max-width: 22.9rem;
        }

        section:nth-of-type(3) {
          max-width: 36.4rem;
        }
      }

      :nth-of-type(2) {
        section:nth-of-type(2) {
          max-width: 25.1rem;
        }
      }
    }
  }
`;

export const Image = styled.div`
  padding: 1.2rem 3.2rem;
  border-radius: .8rem;
  position: relative;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > label {
    display: flex;
    gap: .8rem;
    cursor: pointer;

    span {
      max-width: calc(100vw - 16rem);
      font-family: ${({ theme }) => theme.FONTS.FONT_2};
      font-size: 1.4rem;
      line-height: 2.4rem;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    input {
      width: 100%;
      position: absolute;
      right: 0;
      z-index: -1;
    }

    svg, span {
      transition: filter .2s;
    }

    &:hover {
      svg, span {
        filter: brightness(0.8);
      }
    }
  }

  @media (min-width: 1024px) {
    > label {
        span {
          max-width: 13.3rem;
        }

        input {
          max-width: 22.9rem;
        }
    }
  }
`;

export const Category = styled.div`
  > label {
    position: relative;
    
    select {
      width: 100%;
      appearance: none;

      font-weight: 400;
      font-size: 1.4rem;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      
      padding: 1.2rem 1.6rem;
      border: none;
      border-radius: .8rem;
      cursor: pointer;
    }
    
    svg {
      position: absolute;
      top: 0;
      right: 1.3rem;
      
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      transition: filter .3s ease-in-out;
      cursor: pointer;
    }

    &:hover {
      svg {
        filter: brightness(0.8);
      }
    }
  }
`;
