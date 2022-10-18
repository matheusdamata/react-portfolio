import HeaderMenu from './header-menu';
import { LazyLoadComponent  } from 'react-lazy-load-image-component';

import * as C from "./styles";

import ProfileImage from '../../assets/profile.svg';

const About = () => {
  const loadingLazy = () => {
    console.log('Carregou')
  }

  return (
    <C.Container id="app">
      <HeaderMenu />

      <C.InfoArea className="progressive">
        <LazyLoadComponent delayMethod="debounce" beforeLoad={loadingLazy} delayTime={5000}>
          <C.InfoImageArea>
            <img className="preview lazy" src={ProfileImage} alt="Profile image" width={350} height={350} />
          </C.InfoImageArea>
        </LazyLoadComponent>
        
        <C.InfoTexts>
            <C.InfoGreeting>Olá! Eu sou</C.InfoGreeting>
          <C.InfoHeroDescription><span>MATHEUS</span> DA MATA</C.InfoHeroDescription>
          <C.InfoSmallBio>
            Desenvolvedor <span>Front-end</span> apaixonado por criar
            aplicativos e experiências interativas na web.
          </C.InfoSmallBio>
        </C.InfoTexts>
      </C.InfoArea>

      <C.footer>
        <C.github href="https://github.com/matheusdamata/" target="_blank">
          github
        </C.github>
        <C.github
          href="https://www.linkedin.com/in/matheus-silva-3875b1166/"
          target="_blank"
        >
          linkedin
        </C.github>
      </C.footer>
    </C.Container>
  );
};

export default About;
