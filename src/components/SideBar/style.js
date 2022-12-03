import styled from "styled-components";

const Container = styled.div`
  && {
    min-width: 45px;
    width: 45px;
    height: 100vh;
    background-color: rgb(30, 30, 30);
    color: white;
    position: fixed;
    left: 0;
    top: 0;
    overflow: hidden;
    background-color: rgba(30, 30, 30, 0.2);
    backdrop-filter: blur(4px);
    box-shadow: 5px 0 10px ${(p) => p.theme.colors.shadow};
  }

  &&.show {
    width: 100%;
  }

  .other {
    width: 100%;
    height: 100vh;
  }

  .sideBar {
    height: 100vh;
    width: 45px;
    background-color: rgb(30, 30, 30);
    color: white;
    position: fixed;
    left: 0;
    top: 0;
    box-shadow: 5px 0 10px ${(p) => p.theme.colors.shadow};
    overflow: hidden;
    transition: width 0.8s ease-in-out 0s;
    max-width: 250px;
  }

  .open {
    animation-iteration-count: unset;
    animation-direction: normal;
    animation-fill-mode: forwards;
  }

  .sideBar.open {
    animation: openAnimate 1s;
    width: 100%;
  }

  .sideBar.close {
    width: 75px;
  }

  .toogle {
    width: 100%;
    padding: 10px;
  }

  .toogle svg {
    font-size: 1.6rem;
    cursor: pointer;
  }

  .navigate li {
    cursor: pointer;
    border-bottom: 1px solid rgba(0, 0, 0, 0);
  }

  .sideBar.open .navigate li {
    border-color: #ccc;
  }

  .navigate li:hover {
    background-color: rgb(40, 40, 45);
  }

  .navigate a {
    user-select: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;

    padding: 23px 10px;
  }

  span {
    display: inline-block;
  }

  span svg {
    margin-top: 4px;
    width: 25px;
    height: 25px;
    color: white;
  }

  .sideFooter {
    width: 100%;
    visibility: hidden;
    padding-top: 25px;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sideBar.open .sideFooter {
    visibility: visible;
  }

  @keyframes openAnimate {
    from {
      width: 75px;
    }

    to {
      width: 100%;
    }
  }

  @media screen and (max-width: 550px) {
    .navigate a {
      padding: 35px 10px;
    }
  }
`;

export default Container;
