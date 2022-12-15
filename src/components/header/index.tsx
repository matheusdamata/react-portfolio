import HeaderMenu from './header-menu';

import * as C from './styles';

import ProfileImage from '../../assets/profile-v2.svg';

const About = () => {
  

  return (
    <C.Container>
      <HeaderMenu />

      <C.InfoArea>
        <C.InfoImageArea>
          <img
            src={ProfileImage}
            alt="Profile image"
            width={350}
            height={350}
          />
        </C.InfoImageArea>

        <C.InfoTexts>
          <C.InfoGreeting>Olá! Eu sou</C.InfoGreeting>
          <C.InfoHeroDescription>
            <span>MATHEUS</span> DA MATA
          </C.InfoHeroDescription>
          <C.InfoSmallBio>
            Desenvolvedor <span>Front-end</span> apaixonado por criar
            aplicativos e experiências interativas na web.
          </C.InfoSmallBio>
        </C.InfoTexts>
      </C.InfoArea>

      <C.Socials>
        <C.SocialLink href="https://github.com/matheusdamata/" target="_blank">
          github
        </C.SocialLink>
        <C.SocialLink href="https://www.linkedin.com/in/matheus-silva-3875b1166/" target="_blank" >
          linkedin
        </C.SocialLink>
      </C.Socials>
    </C.Container>
  );
};

export default About;
