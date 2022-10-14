import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
`;

export const InfoArea = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

export const InfoImageArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 5rem;

  img {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    box-shadow: 12px 0 #d9c8f1, 24px 0 #e2d6f3, 36px 0 #ece6f5;
  }

  @media (max-width: 760px) {
    padding: 0;
    padding: 2rem;

    img {
      width: 275px;
      height: 275px;
    }
  }
`;

export const InfoTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 5;

  @media (max-width: 760px) {
    padding: 2rem;
  }
`;

export const InfoGreeting = styled.p`
  font-size: 1.2rem;
  letter-spacing: 1px;
  line-height: 1.2;
  color: #333;
`;

export const InfoHeroDescription = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: #333;
  margin: 1rem 0;

  span {
    color: var(--purple-dark);
  }
`;

export const InfoSmallBio = styled.p`
  min-width: 250px;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1.4;
  color: #5f6f81;

  span {
    color: var(--purple-dark);
  }
`;

export const footer = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: row;
  padding: 20px;
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const github = styled.a`
  margin-right: 20px;
  color: var(--dark-linear);
  text-decoration-color: var(--purple-dark);
  text-decoration-line: underline;
  text-decoration-style: wavy;
  transition: 0.5s;

  &:hover {
    color: var(--purple-light);
    font-size: 1.1rem;
  }
`;

export const linkedin = styled.a`
  color: var(--dark-linear);
  text-decoration-color: var(--purple-dark);
  text-decoration-line: underline;
  text-decoration-style: wavy;
  transition: 0.5s;

  &:hover {
    color: var(--purple-light);
    font-size: 1.1rem;
  }
`;
