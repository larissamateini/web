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

  .tags-ingredients {
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

  .dish-price {
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 3.2rem;

    > button {
      padding: 1.2rem 2.4rem;
    }

    .delete-dish {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }
    //&disbled
    .save-updated-dish:disabled {
      background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
      opacity: 1;
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

    .buttons {
      justify-content: flex-end;

      .save-updated-dish {
        max-width: 17.2rem;
      }

      .delete-dish {
        max-width: 13.5rem;
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
      font-family: ${({ theme }) => theme.FONTS.FONT_2};
      font-weight: 500;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      margin-top: 2.4rem;
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
  position: relative;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  padding: 1.2rem 3.2rem;
  border-radius: .8rem;

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

      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    input {
      width: 100%;
      position: absolute;
      right: 0;
      z-index: -1;
    }

    svg, span {
      transition: filter .3s;
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
    appearance: none;

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

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      transition: filter .3s;
      cursor: pointer;
      pointer-events: none;
    }

    &:hover {
      svg {
        filter: brightness(0.8);
      }
    }
  }

`;
