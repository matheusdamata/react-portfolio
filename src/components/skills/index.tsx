import { useEffect, useState } from 'react';
import * as C from './styles';

import { AllIconsSkills, IconType } from '../../helpers/IconsSkill';

const Skills = () => {
    const [iconsData, setIconsData] = useState<IconType[]>([]);

    useEffect(() => { if(AllIconsSkills.length > 0) setIconsData(AllIconsSkills); }, []);

    return (    
        <C.Container>
            <C.Title>Habilidades</C.Title>
            <C.IconsArea>
                {iconsData.map((item, index) => (
                    <C.IconsItem key={index}>
                        <C.IconsItemImage src={item.imageUrl} alt="Skill image" />
                        <C.IconsItemTitle>{item.title}</C.IconsItemTitle>
                    </C.IconsItem>
                ))}
            </C.IconsArea>
        </C.Container>
    );
}

export default Skills;