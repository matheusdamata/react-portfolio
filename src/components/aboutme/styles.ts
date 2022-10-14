import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    max-width: 1120px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: var(--background);
    margin: 4rem auto;

    @media (max-width: 960px) {
        padding: 2rem;
    }
`;

export const Title = styled.h2`
    font-size: 1.6rem;
    font-weight: 400;
    color: #333333;
`;

export const Article = styled.article`
    background-color: var(--white);
    border-radius: 50px;
    margin: 2rem;
    padding: 2.5rem;
`;

export const AboutMeText = styled.p`
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.5;
    color: #333333;
`;