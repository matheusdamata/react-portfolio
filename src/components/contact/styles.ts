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

  @media (max-width: 960px) {
    padding: 2rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 400;
  color: #333333;
`;

export const ContactArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 2rem;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const ContactAreaText = styled.p`
  flex: 1;
  font-size: 1rem;
  font-weight: 500;
  color: #5f6f81;
  margin-top: 3rem;
  margin-right: 1rem;

  @media (max-width: 960px) {
    margin: 2rem 0;
  }
`;

export const ContactAreaBody = styled.div`
  display: flex;
  flex: 1;
  gap: 4rem;

  @media (max-width: 960px) {
    gap: 1rem;
  }

  @media (max-width: 460px) {
    flex-direction: column;
  }
`;

export const ContactAreaItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  border-radius: 50px;
  padding: 2rem;

  @media (max-width: 960px) {
    margin: 2rem;
  }

  @media (max-width: 760px) {
    margin: 1rem;
  }

  @media (max-width: 480px) {
    margin: 0;
  }
`;

export const ContactAreaItemImage = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const ContactAreaItemTitle = styled.h3`
  margin-top: 1rem;
  color: #333333;
`;

export const ContactAreaItemText = styled.p`
  line-height: 2.5;
  color: #5f6f81;

  @media (max-width: 1036px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    line-height: 1.5;
  }
`;

export const ContactAreaItemLink = styled.a`
  text-decoration: underline;
  text-decoration-color: var(--purple-dark);
  color: #fff;
`;

export const ContactAreaItemButton = styled.button`
  width: 100%;
  background-color: var(--purple-dark);
  border: 0;
  border-radius: 2rem;
  padding: 0.5rem 0;
  font-weight: 600;
  margin-top: 1rem;
  color: #fff;
  transition: opacity 0.5s;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 1036px) {
    font-size: 0.8rem;
  }

  @media (max-width: 760px) {
    font-size: 0.75rem;
  }
`;
