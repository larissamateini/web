import styled from "styled-components";

export const Container = styled.button`
  min-width: 14rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  font-family: ${({ theme }) => theme.FONTS.FONT_2};
  font-size: 1.4rem;
  line-height: 2.5rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};

  padding: 1.5rem 1rem;
  border: 0;
  border-radius: .6rem;

  > span {
    position: absolute;
    top: -.4rem;
    right: -.6rem;

    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
    padding: .6rem;
    border-radius: 99px;
  }

  &:disabled {
    opacity: .5;
  }

  @media (min-width: 1024px) {
    padding: 1.5rem;
    gap: .7rem;
    
    > span {
      position: initial;
      padding: 0;
    }
  }
`;