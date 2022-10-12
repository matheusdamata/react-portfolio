import { useEffect, useState } from 'react';
import * as C from './styles';

import { AllProjects, ProjectsType } from '../../helpers/Projects';

const Projects = () => {
    const [projectsData, setProjectsData] = useState<ProjectsType[]>([]);

    useEffect(() => { if(AllProjects.length > 0) setProjectsData(AllProjects); }, []);

    return (    
        <C.Container>
            <C.Title>Projetos</C.Title>
            <C.ProjectsArea>
                {projectsData.map((item, index) => (
                    <C.ProjectItem key={index}>
                        <C.ProjectItemImage src={item.imageUrl} />

                        <C.ProjectItemTextArea>
                            <C.ProjectItemText>{item.title}</C.ProjectItemText>
                            <C.ProjectItemCategory>{item.category}</C.ProjectItemCategory>
                            <C.ProjectItemDescription>{item.description}</C.ProjectItemDescription>
                        </C.ProjectItemTextArea>
                    </C.ProjectItem>
                ))}
            </C.ProjectsArea>
        </C.Container>
    );
}

export default Projects;