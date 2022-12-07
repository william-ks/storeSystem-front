import styled from "styled-components";
import { shade } from "polished";

const Container = styled.li`
  && {
    border-bottom: 1px solid gray;
    padding: 20px 2%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .name {
    text-transform: capitalize;
    font-size: 1.3rem;
  }

  .button {
    all: unset;
    color: inherit;
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
`;

export default Container;
