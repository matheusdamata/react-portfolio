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

export const IconsArea = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 1rem;
    align-self: center;
    background-color: var(--white);
    border-radius: 50px;
    padding: 2.5rem;
    margin: 2rem;

    @media (max-width: 960px) {
        grid-template-columns: repeat(4, 1fr);
        width: 95%;
    }

    @media (max-width: 760px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 2.5rem;
        gap: 2rem;
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