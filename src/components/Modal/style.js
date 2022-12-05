import styled from "styled-components";

const Container = styled.div`
  && {
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(4px);
    z-index: 999;
    padding: 3%;
  }

  .modalBox {
    width: clamp(150px, 100%, 500px);
    padding: 45px 4% 25px 4%;
    background-color: ${(p) => p.theme.colors.backgroundDiv};
    border-radius: 5px;
    box-shadow: 0 5px 10px ${(p) => p.theme.colors.shadow};
    color: ${(p) => p.theme.colors.text.secondary};
    position: relative;
  }

  .closeIcon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 1.5rem;
  }
`;

export default Container;
