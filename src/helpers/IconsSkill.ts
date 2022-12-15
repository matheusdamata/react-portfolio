import HTMLImage from '../assets/icons/html.svg';
import CSSImage from '../assets/icons/css.svg';
import JavaScriptImage from '../assets/icons/javascript.svg';
import ReactJSImage from '../assets/icons/react.svg';
import NodeJSImage from '../assets/icons/nodejs.svg';
import TypescriptImage from '../assets/icons/typescript.svg';
import NextJSImage from '../assets/icons/nextjs.svg';

export type IconType = {
    id: number;
    title: string;
    imageUrl: string;
}

export const AllIconsSkills: IconType[] = [
    {
        id: 1,
        title: 'HTML',
        imageUrl: HTMLImage
    }, {
        id: 2,
        title: 'CSS',
        imageUrl: CSSImage
    }, {
        id: 3,
        title: 'JavaScript',
        imageUrl: JavaScriptImage
    }, {
        id: 4,
        title: 'React',
        imageUrl: ReactJSImage
    }, {
        id: 5,
        title: 'Next JS',
        imageUrl: NextJSImage
    }, {
        id: 6,
        title: 'React Native',
        imageUrl: ReactJSImage
    }, {
        id: 7,
        title: 'NodeJS',
        imageUrl: NodeJSImage
    }, {
        id: 8,
        title: 'Typescript',
        imageUrl: TypescriptImage
    }
]