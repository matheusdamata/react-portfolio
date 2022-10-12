import * as C from './styles';

const Contact = () => {
    return (    
        <C.Container>
            <C.Title>Fale comigo</C.Title>
            <C.Article>
                <C.AboutMeText>
                    Moro em Goiânia, Goiás.
                    <br /><br />
                    Empresário no ramo de bebê, no momento em transição de carreira para Desenvolvedor Front-end, 
                    deixando minha esposa responsável pela nossa empresa.
                    <br /><br />
                    Amo programação, sou um desenvolvedor 
                    entusiasta, autodidata, que adora inovar, aprender e criar algo novo. Atualmente realizo  
                    projetos (pessoais) utilizando ReactJS, React Native, HTML, CSS, JavaScript e TypeScript.                    
                </C.AboutMeText>
            </C.Article>
        </C.Container>
    );
}

export default Contact;