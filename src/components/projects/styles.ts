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

export const ProjectsArea = styled.div`
    width: 100%;
    background-color: var(--white);
    border-radius: 50px;
    padding: 2rem;
    margin: 3rem;
`;

export const ProjectItem = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;
`;

export const ProjectItemImage = styled.img`
    width: 21.875rem;
    height: auto;
`;

export const ProjectItemTextArea = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`

export const ProjectItemText = styled.h3`
    font-size: 1.2rem;
`;

export const ProjectItemCategory = styled.h4`
    font-size: 1rem;
    font-weight: 400;
    margin: 1rem 0;
    color: #5f6f81;
`;

export const ProjectItemDescription = styled.p`
    font-size: 1.1rem;
    font-weight: 400;
    color: #333;
`;