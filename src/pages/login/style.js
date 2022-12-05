import styled from "styled-components";

const Container = styled.div`
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    text-align: center;

    h2{
        font-weight: 700;
        font-family: ${(p) => p.theme.fonts.roboto};
        font-size: 1.75rem;
    }

    p{
        text-align: left;
        margin-bottom: -15px;
    }

    .loginFirstInput{
        margin-bottom: 25px;
    }

    a{
        text-align: right;
        display: block;
        margin-top: -10px;
        margin-bottom: 10px;
        text-decoration: underline;
    }

    .loginForm {
        width: clamp(130px, 90%, 500px);
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 17px;

    }

    button{
        width: clamp(100px, 75%, 300px);
        margin: 0 auto;
    }
`;

export default Container;
