import styled from "styled-components";

const Container = styled.div`
  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .options {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  .options button {
    width: 30%;
    text-align: center;
    font-size: 1.1rem;
  }

  button.nao {
    background: ${(p) => p.theme.colors.backgroundDiv};
    color: ${(p) => p.theme.colors.text.primary};
  }
`;

export default Container;
