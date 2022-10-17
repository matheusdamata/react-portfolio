import * as C from './styles';

import logoHeader from '../../../assets/logo.svg';

const Header = () => {
    return (  
        <C.Container>  
            <C.Nav>
                <C.Logo src={logoHeader} alt="Logo image" />
                <C.Menu>
                    <C.MenuLine isPurple={false}></C.MenuLine>
                    <C.MenuLine isPurple={true}></C.MenuLine>
                    <C.MenuLine isPurple={false}></C.MenuLine>
                </C.Menu>
            </C.Nav>
        </C.Container>
    );
}

export default Header;