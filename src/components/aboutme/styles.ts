import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    max-width: 1140px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: var(--background);
    margin: 4rem auto;

    @media (min-width: 769px) and (max-width: 1140px) {
        padding: 2rem;
    }

    @media (min-width: 426px) and (max-width: 769px) {
        padding: 2rem;
    }

    @media (max-width: 425px) {
        padding: 0 2rem;
    }
`;

export const Title = styled.h2`
    font-size: 1.6rem;
    font-weight: 400;
    color: #333333;

    @media (min-width: 769px) and (max-width: 1140px) {
        padding: 2rem;
    }

    @media (min-width: 426px) and (max-width: 769px) {
        padding: 2rem;
    }

    @media (max-width: 425px) {
        font-size: 1.35rem;
        padding: 2rem 0;
    }
`;

export const Article = styled.article`
    background-color: var(--white);
    border-radius: 50px;
    margin: 2rem;
    padding: 2.5rem;

    @media (max-width: 425px) {
        padding: 2rem;
        margin: 0;
    }
`;

export const AboutMeText = styled.p`
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.5;
    color: #333333;

    @media (max-width: 425px) {
        font-size: 1rem;
    }

    a {
        text-decoration: none;
        color: var(--purple-dark);
    }

    strong {
        color: var(--purple-dark);
    }
`;