import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f7f7f7;
        --dark-linear: rgba(45, 45, 45, 1);
        --gray-ico: #8A8A8A;
        --purple-light: #DA00FE;
        --purple-dark: #A100ED;
        --white: #FFFFFF;   
        
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -mox-osx-font-smoothing: grayscale;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        height: 100vh;
        background: var(--background);
    }

    body, input-security, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
`;

export const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
`;