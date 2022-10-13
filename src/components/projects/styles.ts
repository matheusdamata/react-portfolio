import styled from "styled-components";

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
  border-radius: 1rem;
  transition: transform 0.8s;

  &:hover {
    transform: translate(0.2rem, 0.2rem);
  }
`;

export const ProjectItemTextArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;

export const ProjectItemText = styled.h3`
  font-size: 1.2rem;
`;

export const ProjectItemTechnology = styled.p`
  font-size: 1rem;

  span {
    color: var(--purple-dark);
    font-weight: 600;
  }
`;

export const ProjectItemCategory = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  margin: 0.5rem 0;
  color: #5f6f81;
`;

export const ProjectItemDescription = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: #333;
`;

export const ProjectItemButtonArea = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProjectItemViewProjectButton = styled.button`
  width: 25%;
  background-color: var(--purple-dark);
  border: 0;
  border-radius: 2rem;
  padding: 0.5rem 0;
  font-weight: 600;
  margin-top: 1rem;
  margin-right: 1.5rem;
  color: #fff;
  transition: opacity .5s;

  &:hover {
    opacity: 0.7;
  }
`; 

export const ProjectItemViewProjectGitHubButton = styled.button`
  width: 25%;
  background-color: transparent;
  border: 2px solid var(--purple-dark);
  border-radius: 2rem;
  padding: 0.5rem 0;
  font-weight: 600;
  margin-top: 1rem;
  color: var(--purple-dark);
  transition: .5s ease;

  &:hover {
    background: var(--purple-dark);
    color: #fff;
  }
`;