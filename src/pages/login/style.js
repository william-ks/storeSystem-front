import styled from "styled-components";

const Container = styled.div`
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    text-align: center;

    p{
        text-align: left;
    }

    a{
        text-align: right;
        display: block;
    }

    .loginForm {
        width: clamp(130px, 90%, 500px);
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;

    }

    button{
        width: clamp(100px, 80%, 300px);
        margin: 0 auto;
    }
`;

export default Container;
