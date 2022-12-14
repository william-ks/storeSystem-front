import styled from "styled-components";
import { shade } from "polished";

const verifyTheme = (p) => {
  return p.theme.title === "dark" ? p.theme.colors.shadow : "rgba(0,0,0,0.05)";
};

const Container = styled.li`
  && {
    padding: 15px 2%;

    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border: 1px solid ${(p) => shade(0.08, p.theme.colors.backgroundDiv)};

    cursor: pointer;

    background-color: ${(p) => p.theme.colors.backgroundDiv};
    border-radius: 10px;
    box-shadow: 0 2px 10px ${(p) => verifyTheme(p)};
  }

  .name {
    text-transform: capitalize;
    font-size: 1.3rem;
  }

  .button {
    all: unset;
    color: inherit;
  }

  .button:hover {
    transform: none;
    box-shadow: none;
  }

  .buttons {
    display: flex;
    gap: 15px;
    position: relative;
  }

  .button svg {
    cursor: pointer;
    width: 23px;
    height: 23px;
    color: ${(p) => p.theme.colors.text.secondary};
  }

  .button svg:active {
    transform: scale(0.96);
  }

  .options {
    position: absolute;
    left: -144px;
    top: -124px;
    width: 150px;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: hidden;

    border-radius: 10px 10px 0 10px;

    background-color: ${(p) => p.theme.colors.backgroundDiv};
    box-shadow: 0 5px 10px ${(p) => p.theme.colors.shadow};
  }

  .options button {
    cursor: pointer;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    color: ${(p) => p.theme.colors.text.secondary};
  }

  .options button:hover {
    background-color: ${(p) => shade(0.25, p.theme.colors.backgroundDiv)};
  }

  .icons {
    font-size: 1.5rem;
    color: ${(p) => p.theme.colors.text.secondary};
  }
`;

export default Container;
