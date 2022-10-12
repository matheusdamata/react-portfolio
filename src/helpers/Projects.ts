import GameStoreImage from '../assets/projects/gamestore.jpg';
import QrCodeImage from '../assets/projects/qrcode.jpg';

export type ProjectsType = {
    id: number;
    imageUrl: string;
    title: string;
    category: 'E-commerce' | 'Outros';
    description: string;
}

export const AllProjects: ProjectsType[] = [
    {
        id: 1,
        imageUrl: GameStoreImage,
        title: 'Game Store',
        category: 'E-commerce',
        description: 'Projeto e-commerce "GAME STORE" (inspiração através de um proj. do figma), no momento atual o projeto se encontra em 0.7v, com toda sua estrutura visual pronta, função de adicionar ao carrinho completa (faltando sua apresentação/listagem em um modal).'
    }, {
        id: 2,
        imageUrl: QrCodeImage,
        title: 'Componente de QR Code',
        category: 'Outros',
        description: 'Exercício feito através do site https://www.frontendmentor.io/, foi concluído em 32 minutos.'
    },
]