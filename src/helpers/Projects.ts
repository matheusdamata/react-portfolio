import GameStoreImage from '../assets/projects/gamestore.jpg';
import QrCodeImage from '../assets/projects/qrcode.jpg';

export type ProjectsType = {
    id: number;
    imageUrl: string;
    title: string;
    category: 'E-commerce' | 'Outros';
    technology: string;
    description: string;
    deploy: string;
    repository: string;
}

export const AllProjects: ProjectsType[] = [
    {
        id: 1,
        imageUrl: GameStoreImage,
        title: 'Game Store',
        category: 'E-commerce',
        technology: 'ReactJS e Typescript',
        description: 'Projeto e-commerce "GAME STORE", no momento atual o projeto se encontra em 0.7v, com toda sua estrutura visual pronta, função de adicionar ao carrinho completa (faltando sua apresentação/listagem em um modal).',
        deploy: 'https://mellifluous-twilight-ce002c.netlify.app/',
        repository: ''
    }, {
        id: 2,
        imageUrl: QrCodeImage,
        title: 'Componente de QR Code',
        category: 'Outros',
        technology: 'HTML e CSS',
        description: 'Exercício feito através do site https://www.frontendmentor.io/, foi concluído em 32 minutos.',
        deploy: 'https://coruscating-gelato-a1eee9.netlify.app/',
        repository: 'https://github.com/matheusdamata/qr-code-front-mentor'
    },
]