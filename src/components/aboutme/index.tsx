import * as C from './styles';

const AboutMe = () => {
    return (    
        <C.Container>
            <C.Title>Sobre mim</C.Title>
            <C.Article>
                <C.AboutMeText>
                    Meu nome é Matheus, moro em Goiânia - Goiás.
                    <br /><br />
                    Sou fundador da @usesmilebaby, amante da tecnologia e inovação!
                    <br /><br />
                    Por gostar muito de criar algo, aos 15 anos inicei minha empresa pegando um produto já existente e melhorando ele em alguns aspectos, com o objetivo em oferecer o menor custo com a melhor qualidade possível para o B2B.
                    <br /><br />
                    Aos 10 anos de idade fiz meu primeiro "Hello World" em HTML, 
                    e me apaixonei por programação, sou um desenvolvedor entusiasta, autodidata, que adora inovar, aprender e criar algo novo. 
                    Atualmente realizo projetos (pessoais) utilizando ReactJS, NextJS, React Native, HTML, CSS, JavaScript e TypeScript.
                    <br /><br />
                    Quando não estou trabalhando, estou codando algum projeto pessoal, criando conteúdo na <a href="http://twitch.tv/matheusdamatag" target="_blank">Twitch</a> ou estudando na <strong>@rocketseat.</strong>                    
                </C.AboutMeText>
            </C.Article>
        </C.Container>
    );
}

export default AboutMe;