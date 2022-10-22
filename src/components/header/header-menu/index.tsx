import { useState } from 'react';

import * as C from './styles';

import logoHeader from '../../../assets/logo.svg';

const Header = () => {
    const [statusMenuMobile, setStatusMenuMobile] = useState(false);

    return (  
        <C.Container>  
            <C.Nav>
                <C.Logo src={logoHeader} alt="Logo image" width={130} height={26} />

                {statusMenuMobile &&
                <C.Menu>
                    <C.MenuLine isPurple={false}></C.MenuLine>
                    <C.MenuLine isPurple={true}></C.MenuLine>
                    <C.MenuLine isPurple={false}></C.MenuLine>
                </C.Menu>
                }
            </C.Nav>
        </C.Container>
    );
}

export default Header;