import EmailIcon from '../assets/icons/email.svg';
import LinkedinIcon from '../assets/icons/linkedin.svg';

export type ContactType = {
    id: number;
    icon: string;
    title: string;
    text: string;
    linktype: string;
    type: 'email' | 'linkedin';
}

export const AllContacts: ContactType[] = [
    {
        id: 1,
        icon: EmailIcon,
        title: 'E-mail',
        text: 'Me envie um e-mail',
        linktype: 'matheusdamatag@gmail.com',
        type: 'email'
    }, {
        id: 2,
        icon: LinkedinIcon,
        title: 'Linkedin',
        text: 'Fale agora comigo',
        linktype: 'https://www.linkedin.com/in/matheus-silva-3875b1166/',
        type: 'linkedin'
    }, 
]