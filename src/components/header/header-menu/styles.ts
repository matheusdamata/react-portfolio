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
    padding: 2.5rem;
    justify-content: space-between;

    @media (max-width: 425px) {
        padding: 2rem;
    }
`;

export const Menu = styled.div`
    width: 1.875rem;
    height: 1.875rem;
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

export const Logo = styled.img``;