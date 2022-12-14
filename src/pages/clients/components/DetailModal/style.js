import styled from "styled-components";
import { invert } from "polished";

const Container = styled.div`
  && {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 15px;
    padding: 0 4%;
  }

  .flexGroup {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button.delete {
    background-color: transparent;
    color: ${(p) => p.theme.colors.text.primary};
    transition: background-color 0.1s ease-in-out 0s;
  }

  button.delete:hover {
    color: white;
    background-color: #dd1b16;
    border-color: #dd1b16;
    text-shadow: 0 0 5px;
  }
`;

export default Container;
