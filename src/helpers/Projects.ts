import CoffeeDeliveryImage from '../assets/projects/coffee-delivery.svg';
import BabyEcommerceImage from '../assets/projects/baby-ecommerce.svg';
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
        imageUrl: BabyEcommerceImage,
        title: 'Baby E-commerce',
        category: 'E-commerce',
        technology: 'ReactJS e outros',
        description: 'Projeto desenvolvido durante minhas lives diárias na Twitch, com o objetivo em aprimorar mais meus conhecimentos.',
        deploy: '',
        repository: 'https://github.com/matheusdamata/react-baby-shop-live'
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