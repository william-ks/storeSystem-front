import styled from "styled-components";
import { shade } from "polished";

const verifyTheme = (p) => {
  return p.theme.title === "dark" ? p.theme.colors.shadow : "rgba(0,0,0,0.05)";
};

const Container = styled.button`
  && {
    all: unset;
    box-sizing: border-box;
    width: 100%;
    padding: 20px 0;
    background-color: ${(p) => p.theme.colors.backgroundDiv};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 15px;
    cursor: pointer;
    box-shadow: 0 2px 10px ${(p) => verifyTheme(p)};
    user-select: none;
    margin-bottom: 35px;

    border: 1px solid rgba(0, 0, 0, 0);
  }

  &&:hover {
    position: static;
    transform: none;
    box-shadow: 0 2px 10px ${(p) => verifyTheme(p)};
  }

  &&:active {
    position: relative;
    transform: scale(0.96);

    transform: none;
    box-shadow: 0 2px 10px ${(p) => verifyTheme(p)};
  }

  .icon svg {
    width: 35px;
    height: 35px;
    color: gray;
  }

  @media screen and (min-width: 750px) {
    &&:hover {
      position: relative;
      transform: scale(1.02);
      border-color: ${(p) => p.theme.colors.primary};
      box-shadow: 0 5px 10px ${(p) => shade(0.15, verifyTheme(p))};
    }

    &&:active {
      position: relative;
      transform: scale(1);
    }
  }
`;

export default Container;
