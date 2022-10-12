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
`;

export const Title = styled.h2`
    font-size: 1.6rem;
    font-weight: 400;
    color: #333333;
`;

export const IconsArea = styled.div`
    width: 100%;
    display: grid;
    flex-direction: row;
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
    background-color: var(--white);
    border-radius: 50px;
    padding: 3rem;
    margin: 3rem;
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