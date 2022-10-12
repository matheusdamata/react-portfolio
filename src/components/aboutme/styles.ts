import styled from 'styled-components';

export const Container = styled.section`
    height: 100%;
    max-width: 1120px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: var(--background);
    margin: 4rem auto;
`;

export const Title = styled.h2`
    font-size: 1.6rem;
    font-weight: 400;
    color: #333333;
`;

export const Article = styled.article`
    width: 100%;
    background-color: var(--white);
    border-radius: 50px;
    padding: 2.5rem;
    margin: 3rem;
`;

export const AboutMeText = styled.p`
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.5;
    color: #333333;
`;