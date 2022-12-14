import styled from "styled-components";
import { darken } from "polished";

const Container = styled.div`
  && {
    width: 100%;
    border-radius: 16px;
    padding: 10px 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2%;
    cursor: pointer;

    background-color: ${(p) => p.theme.colors.backgroundDiv};
    box-shadow: 0 5px 10px ${(p) => p.theme.colors.shadow};
    border: 1px solid ${(p) => darken(0.15, p.theme.colors.backgroundDiv)};
  }

  .image {
    width: 70px;
    height: 70px;
    background-color: gray;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid ${(p) => darken(0.15, p.theme.colors.backgroundDiv)};
  }

  .column {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
  }

  .title {
    text-align: right;
  }

  .inventory {
    font-size: 0.7rem;
    font-weight: 300;
  }

  .price {
    font-size: 0.9rem;
  }

  .price span {
    font-size: 1rem;
    font-weight: 400;
  }

  @media screen and (max-width: 300px) {
    .title {
      font-size: 1rem;
    }

    .inventory {
      font-size: 0.6rem;
      font-weight: 300;
    }

    .price {
      font-size: 0.9rem;
      font-weight: 200;
    }

    .column {
      max-width: calc(100% - 65px);
      text-align: right;
    }

    .price span {
      font-size: 1rem;
      font-weight: 300;
    }

    .image {
      width: 50px;
      height: 50px;
    }
  }

  @media screen and (max-width: 550px) {
    && {
      user-select: none;
    }

    .column {
      max-width: calc(100% - 85px);
      text-align: right;
    }

    .image {
      width: 70px;
      height: 70px;
    }
  }

  @media screen and (min-width: 750px) {
    && {
      width: 200px;
      height: 275px;
      border-radius: 16px;
      padding: 8px 15px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 10px;
      transition: transform 0.1s ease-in-out 0s;
    }

    &&:hover {
      position: relative;
      transform: scale(1.04);
    }

    .image {
      width: 100%;
      height: 168px;
      background-color: gray;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid ${(p) => darken(0.15, p.theme.colors.backgroundDiv)};
    }

    .title {
      text-align: left;
    }

    .column {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      gap: 5px;
    }

    .inventory {
      font-size: 0.7rem;
      font-weight: 300;
    }

    .price {
      font-size: 0.9rem;
    }

    .price span {
      font-size: 1rem;
      font-weight: 400;
    }
  }
`;

export default Container;
