import { useEffect, useState } from 'react';
import { ContactType, AllContacts } from '../../helpers/Contact';
import * as C from './styles';

const Contact = () => {
    const [getContacts, setGetContacts] = useState<ContactType[]>([]);

    useEffect(() => { if (AllContacts.length > 0) setGetContacts(AllContacts) }, []);

    const handleClickLinkedin = () => window.open('https://www.linkedin.com/in/matheus-silva-3875b1166/', '_blank', 'noopener, noreferrer');

    return (    
        <C.Container>
            <C.Title>Fale comigo</C.Title>
            <C.ContactArea>
                <C.ContactAreaText>
                    Está precisando de um desenvolvedor em sua empresa? 
                    Estou disponível para conversar sobre, será um prazer 
                    contribuir nessa inovação!
                </C.ContactAreaText>
                    
                <C.ContactAreaBody>
                {getContacts.map((item, index) => (
                    <C.ContactAreaItem key={index}>
                        <C.ContactAreaItemImage src={item.icon} alt="Icon image" />
                        <C.ContactAreaItemTitle>{item.title}</C.ContactAreaItemTitle>
                        <C.ContactAreaItemText>{item.text}</C.ContactAreaItemText>   


                        {item.type === 'email' &&
                            <C.ContactAreaItemButton>
                                <C.ContactAreaItemLink href={'mailto:' + item.linktype} >
                                    Enviar e-mail
                                </C.ContactAreaItemLink>
                            </C.ContactAreaItemButton>
                        }

                        {item.type === 'linkedin' &&
                            <C.ContactAreaItemButton onClick={handleClickLinkedin}>Conversar</C.ContactAreaItemButton>
                        }
                    </C.ContactAreaItem>
                ))}
                </C.ContactAreaBody>
            </C.ContactArea>
        </C.Container>
    );
}

export default Contact;