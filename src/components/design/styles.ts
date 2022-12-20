import styled from "styled-components";

export const Container = styled.section`
  height: 100%;
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

export const DesignArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--white);
  border-radius: 50px;
  padding: 2rem;
  margin: 2rem;
  gap: 2rem;

  @media (min-width: 426px) and (max-width: 769px) {
    flex-direction: column;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    margin: 0;
  }
`;

export const ProjectItem = styled.div`
  display: flex;
  flex-direction: row;

  @media (min-width: 426px) and (max-width: 769px) {
    flex-direction: column;
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const ProjectItemImage = styled.img`
  width: auto;
  height: 350px;

  border-radius: 1rem;
  transition: transform 0.8s;

  object-fit: cover;

  &:hover {
    transform: translate(0.2rem, 0.2rem);
  }

  @media (min-width: 769px) and (max-width: 1140px) {
    width: 18.75rem;
    height: 14rem;
  }

  @media (min-width: 426px) and (max-width: 769px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 425px) {
    width: 100%;
    height: auto;
  }
`;

export const ProjectItemTextArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  @media (min-width: 426px) and (max-width: 769px) {
    margin: 1rem 0;
  }

  @media (max-width: 425px) {
    margin: 1rem 0;
  }
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

  @media (max-width: 425px) {
    font-size: 0.85rem;
  }
`;

export const ProjectItemButtonArea = styled.div`
  display: flex;
  flex-direction: row;

  @media (min-width: 426px) and (max-width: 769px) {
    flex-direction: column;
    width: 100%;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    width: 100%;
  }
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
  transition: .5s;

  &:hover {
    opacity: 0.7;
  }

  @media (min-width: 769px) and (max-width: 1140px) {
    width: 70%;
  }

  @media (min-width: 426px) and (max-width: 769px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    width: 100%;
    margin-right: 0;
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

  @media (min-width: 769px) and (max-width: 1140px) {
    width: 30%;
  }

  @media (min-width: 426px) and (max-width: 769px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    width: 100%;

  }
`;

export const OthersDesign = styled.a`
  font-size: 1rem;
  text-decoration: none;
  color: var(--purple-dark);

  @media (max-width: 425px) {
    font-size: 0.85rem;
  }
`;