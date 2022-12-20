import { Container, Main, GlobalStyle } from './css/global';

import Header from './components/header';
import AboutMe from './components/aboutme';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import Design from './components/design';

const App = () => {
  return (
    <Container>
      <Header />
      
      <Main>
        <AboutMe />
        <Skills />
        <Projects />
        <Design />
        <Contact />
        <Footer />

        <GlobalStyle />
      </Main>
    </Container>
  );
};

export default App;
