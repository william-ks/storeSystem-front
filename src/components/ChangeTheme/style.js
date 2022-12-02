import styled from "styled-components";
import { shade } from "polished";

import moon from "./moon.svg";
import sun from "./sun.svg";

const Container = styled.button`
  && {
    all: unset;
    margin: 50px;
    display: inline-block;
    user-select: none;
  }

  .none {
    display: none;
  }

  .boxChange {
    width: 22px;
    height: 75px;
    background-color: white;
    border: 1px solid rgb(250, 250, 250);
    border-radius: 55px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    position: relative;
    cursor: pointer;
  }

  .boll {
    background-color: white;
    border: 1px solid rgb(250, 250, 250);
    border-radius: 55px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    width: 25px;
    height: 25px;
    padding: 3.5px;

    position: absolute;
    left: 50%;
    top: 0;

    transform: translate(-50%, -40%) rotate(0);
  }

  .lightToDark {
    animation: lightToDark 1s;
    animation-iteration-count: unset;
    animation-direction: normal;
    animation-fill-mode: both;
  }

  .darkToLight {
    animation: darkToLight 1s;
    animation-iteration-count: unset;
    animation-direction: normal;
    animation-fill-mode: both;
  }

  @keyframes lightToDark {
    from {
      top: 0%;
      transform: translate(-50%, -40%) rotate(0);
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    }

    to {
      top: 95%;
      box-shadow: 0 -5px 5px rgba(0, 0, 0, 0.2);
      transform: translate(-50%, -40%) rotate(360deg);
    }
  }

  @keyframes darkToLight {
    from {
      top: 95%;
      box-shadow: 0 -5px 5px rgba(0, 0, 0, 0.2);
      transform: translate(-50%, -40%) rotate(360deg);
    }

    to {
      top: 0%;
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
      transform: translate(-50%, -40%) rotate(0);
    }
  }
`;

export default Container;
