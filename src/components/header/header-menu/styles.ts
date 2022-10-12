import styled from 'styled-components';

export const Container = styled.div`
    height: 6.9rem;
    display: flex;
    flex-direction: column;
    background-color: var(--background);
`;

export const Nav = styled.div`
    display: flex;
    width: 100%;
    padding: 40px;
    justify-content: space-between;
`;

export const Menu = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    cursor: pointer;

`;

interface isPurpleMenuLine {
    isPurple: boolean;
}

export const MenuLine = styled.div<isPurpleMenuLine>`
    height: ${(props) => props.isPurple ? '5px' : '3px'};
    width: ${(props) => props.isPurple ? '2.5rem' : '2rem'};
    background-color: ${(props) => props.isPurple ? 'var(--purple-dark)' : '#333333'};
`;

export const Logo = styled.img`
    width: 9.5rem;
    height: auto;
`;