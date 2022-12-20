import { useEffect, useState, useTransition } from 'react';
import * as C from './styles';

import { AllProjects, DesignProjectsType } from '../../helpers/DesignProjects';

const Design = () => {
    const [designData, setDesignData] = useState<DesignProjectsType[]>([]);

    useEffect(() => { if(AllProjects.length > 0) setDesignData(AllProjects); }, []);

    const openProject = (url: string) => {
        window.open(url, '_blank', 'noopener, noreferrer');
    }

    const openRepository = (url: string) => {
        window.open(url, '_blank', 'noopener, noreferrer');
    }
 
    return (    
        <C.Container>
            <C.Title>Design para Redes Sociais</C.Title>
            <C.DesignArea>
                {designData.map((item, index) => (
                    <C.ProjectItem key={index}>
                        <C.ProjectItemImage src={item.imageUrl} alt="Project image" width={350} height={255} />
                    </C.ProjectItem>
                ))}
                {/*   <C.OthersProjects href='https://github.com/matheusdamata' target='_blank'>Conferir outros projetos</C.OthersProjects> */}
            </C.DesignArea>
        </C.Container>
    );
}

export default Design;