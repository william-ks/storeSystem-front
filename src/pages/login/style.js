import styled from "styled-components";
import { darken, shade } from "polished";

const backgroundButton = (p) => {
  return p.theme.title === "light"
    ? "transparent"
    : p.theme.colors.button.background;
};

const textButton = (p) => {
  return p.theme.title === "light" ? "black" : p.theme.colors.button.text;
};

const Container = styled.main`
  && {
    min-height: 100vh;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(p) => shade(0.01, p.theme.colors.background)};
  }

  && > .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .boxForm {
    width: clamp(250px, 100%, 500px);
    padding: 25px 16px;
    border-radius: 25px;
    background-color: ${(p) => p.theme.colors.backgroundDiv};
    box-shadow: 0 5px 10px ${(p) => p.theme.colors.shadow};
    border: 1px solid ${(p) => darken(0.1, p.theme.colors.backgroundDiv)};
  }

  label {
    width: 100%;
    user-select: none;
  }

  .title {
    font-weight: 700;
    text-align: center;
    font-family: ${(p) => p.theme.fonts.roboto};
    font-size: 1.8rem;
  }

  .subTitle {
    font-weight: ${(p) => (p.theme.title === "light" ? "200" : "100")};
    font-family: ${(p) => p.theme.fonts.poppins};
    text-align: center;
    font-size: 0.8rem;
    margin-bottom: 25px;
  }

  .loginForm {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .inputTitle {
    text-align: left;
    font-size: 1rem;
  }

  .forget {
    width: 100%;
    text-align: right;
  }

  .forget a {
    color: ${(p) => p.theme.colors.text.secondary};
  }

  .forget a:hover {
    color: ${(p) => p.theme.colors.primary};
  }

  button {
    width: clamp(100px, 75%, 300px);
    margin: 15px auto;
    text-align: center;
    background-color: ${(p) => backgroundButton(p)};
    color: ${(p) => textButton(p)};
  }
`;

export default Container;
