import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  button {
    border: none;
    background: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    transition: filter .2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (min-width: 1024px) {
    svg, span {
      font-size: 2rem;
      font-weight: 700;
      line-height: 160%;
    }
  }
`;