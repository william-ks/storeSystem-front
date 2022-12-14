import styled from "styled-components";

const Container = styled.main`
  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }

  li {
    width: 100%;
  }

  @media screen and (min-width: 750px) {
    ul {
      flex-direction: row;
      flex-wrap: wrap;
    }

    li {
      width: 100%;
      max-width: 200px;
    }
  }
`;

export default Container;
