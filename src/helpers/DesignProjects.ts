import AdsFeed from '../assets/designs/AdsFeed.svg'
import CategorieWebSite from '../assets/designs/CategorieWebSite.svg'
import PostFeed from '../assets/designs/PostFeed.svg'

export type DesignProjectsType = {
    id: number;
    imageUrl: string;
    title?: string;
    category?: 'Post' | 'Marketing ';
    software?: string;
    description?: string;
    deploy?: string;
    repository?: string;
}

export const AllProjects: DesignProjectsType[] = [
    {
        id: 1,
        imageUrl: AdsFeed,
    }, {
        id: 2,
        imageUrl: CategorieWebSite,
    }, {
        id: 3,
        imageUrl: PostFeed,
    },
]