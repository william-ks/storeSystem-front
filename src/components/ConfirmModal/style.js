import styled from "styled-components";
import { darken } from "polished";

const verifyShadow = (p) => {
  return p.theme.title !== "dark" ? p.theme.colors.shadow : "rgba(0,0,0,0.2)";
};

const verifyBg = (p) => {
  return p.theme.title !== "dark"
    ? p.theme.colors.button.background
    : darken(0.03, p.theme.colors.button.background);
};

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

  button.sim {
    background: ${(p) => verifyBg(p)};
    border: 1px solid ${(p) => verifyBg(p)};
  }

  button.nao {
    background: ${(p) => p.theme.colors.backgroundDiv};
    color: ${(p) => p.theme.colors.text.primary};
    box-shadow: 0 5px 10px ${(p) => verifyShadow(p)};
  }
`;

export default Container;
