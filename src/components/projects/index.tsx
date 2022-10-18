import { useEffect, useState } from 'react';
import * as C from './styles';

import { AllProjects, ProjectsType } from '../../helpers/Projects';

const Projects = () => {
    const [projectsData, setProjectsData] = useState<ProjectsType[]>([]);

    useEffect(() => { if(AllProjects.length > 0) setProjectsData(AllProjects); }, []);

    const openProject = (url: string) => {
        window.open(url, '_blank', 'noopener, noreferrer');
    }

    const openRepository = (url: string) => {
        window.open(url, '_blank', 'noopener, noreferrer');
    }
 
    return (    
        <C.Container>
            <C.Title>Projetos</C.Title>
            <C.ProjectsArea>
                {projectsData.map((item, index) => (
                    <C.ProjectItem key={index}>
                        <C.ProjectItemImage src={item.imageUrl} alt="Project image" width={350} height={255} />

                        <C.ProjectItemTextArea>
                            <C.ProjectItemText>{item.title}</C.ProjectItemText>
                            <C.ProjectItemTechnology>Tecnologias usadas: <span>{item.technology}</span></C.ProjectItemTechnology>
                            <C.ProjectItemCategory>{item.category}</C.ProjectItemCategory>
                            <C.ProjectItemDescription>{item.description}</C.ProjectItemDescription>
                            <C.ProjectItemButtonArea>
                                <C.ProjectItemViewProjectButton onClick={() => openProject(item.deploy)} >Ver projeto</C.ProjectItemViewProjectButton>
                                <C.ProjectItemViewProjectGitHubButton onClick={() => openRepository(item.repository)}>Repositório</C.ProjectItemViewProjectGitHubButton>
                            </C.ProjectItemButtonArea>
                        </C.ProjectItemTextArea>
                    </C.ProjectItem>
                ))}
            </C.ProjectsArea>
        </C.Container>
    );
}

export default Projects;