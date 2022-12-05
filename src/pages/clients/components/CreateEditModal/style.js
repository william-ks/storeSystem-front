import styled from "styled-components";

const Container = styled.div`
  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  form,
  label {
    width: 100%;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
  }
`;

export default Container;
