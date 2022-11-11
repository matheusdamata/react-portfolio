import CoffeeDeliveryImage from '../assets/projects/coffee-delivery.svg';
import PortfolioImage from '../assets/projects/portfolio.svg';
import StarbucksImage from '../assets/projects/starbucks.svg';

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
        imageUrl: CoffeeDeliveryImage,
        title: 'Coffee Delivery',
        category: 'E-commerce',
        technology: 'ReactJS e outros',
        description: 'Nesse projeto, desenvolvemos uma aplicação para gerenciar um carrinho de compras de uma cafeteria fictícia.',
        deploy: '',
        repository: 'https://github.com/matheusdamata/react-coffee-delivery'
    }, {
        id: 2,
        imageUrl: PortfolioImage,
        title: 'Portfólio',
        category: 'Outros',
        technology: 'ReactJS e outros',
        description: 'Projeto Portfólio foi desenvolvido com o objetivo em ser atraente e simples, com toda sua parte interna em componentes, tornando fácil sua manuntenção.',
        deploy: 'https://portfolio-matheusdamata.netlify.app/',
        repository: 'https://github.com/matheusdamata/react-portfolio'
    }, {
        id: 3,
        imageUrl: StarbucksImage,
        title: 'Starbucks',
        category: 'Outros',
        technology: 'HTML e CSS',
        description: 'Projeto STARBUCKS apresenta elegância em seu layout, tendo seu display totalmente flexível e bem apresentado no mobile.',
        deploy: 'https://resonant-liger-edf7cf.netlify.app/',
        repository: 'https://github.com/matheusdamata/html-starbucks'
    },
]