import styled from "styled-components";

const Container = styled.header`
  && {
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid ${(p) => p.theme.colors.primary};
    box-shadow: 0 2px 10px ${(p) => p.theme.colors.shadow};
    background-color: ${(p) => p.theme.colors.backgroundDiv};
  }

  .pageTitle {
    user-select: none;
    text-align: center;

    font-size: 2rem;
  }
`;

export default Container;
