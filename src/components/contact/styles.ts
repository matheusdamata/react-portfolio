import styled from "styled-components";

export const Container = styled.section`
  height: 100%;
  width: 1120px;
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

export const ContactArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const ContactAreaText = styled.p`
    flex: 1;
    font-size: 1rem;
    font-weight: 500;
    color: #5f6f81;
    margin-top: 3rem;
`;

export const ContactAreaItem = styled.div`
  flex: 1;
  background-color: var(--white);
  border-radius: 50px;
  padding: 2rem;
  margin: 3rem;
`;

export const ContactAreaItemImage = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const ContactAreaItemTitle = styled.h3`
    color: #333333;
`;

export const ContactAreaItemText = styled.p`
  line-height: 2.5;
  color: #5f6f81;
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
`;
