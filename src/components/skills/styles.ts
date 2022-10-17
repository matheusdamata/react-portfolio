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

    @media (min-width: 769px) and (max-width: 1140px) {
        padding: 2rem;
    }

    @media (min-width: 426px) and (max-width: 769px) {
        padding: 2rem;
    }

    @media (max-width: 425px) {
        padding: 0 2rem;
        margin: 0;
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

export const IconsArea = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 1rem;
    align-self: center;
    background-color: var(--white);
    border-radius: 50px;
    padding: 2.5rem;
    margin: 2rem;

    @media (min-width: 769px) and (max-width: 1140px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 3rem;
    }

    @media (min-width: 426px) and (max-width: 769px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 3rem;
    }

    @media (max-width: 425px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
        margin: 0;
    }
`;

export const IconsItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const IconsItemImage = styled.img`
    width: 3.125rem;
    height: 3.125rem;  
`;

export const IconsItemTitle = styled.h3`
    font-size: 0.8rem;
    font-weight: 600;
    margin-top: 0.5rem;
`;