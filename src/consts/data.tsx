import CreatingAd1SVG from '@/assets/services/smm/creating-ad_1.svg';
import CreatingAd2SVG from '@/assets/services/smm/creating-ad_2.svg';
import CreatingAd3SVG from '@/assets/services/smm/creating-ad_3.svg';

import TeamMember1SVG from '@/assets/services/smm/team-member_1.svg';
import TeamMember2SVG from '@/assets/services/smm/team-member_2.svg';
import TeamMember3SVG from '@/assets/services/smm/team-member_3.svg';
import TeamMember4SVG from '@/assets/services/smm/team-member_4.svg';
import TeamMember5SVG from '@/assets/services/smm/team-member_5.svg';
import TeamMember6SVG from '@/assets/services/smm/team-member_6.svg';


import { ISmmCreatingAdData, ISmmTeamMembers } from './types';



// SERVICES
// SMM
export const smmCreatingAdData: ISmmCreatingAdData = {
    eyebrow: 'Инфлюенс-маркетинг',
    title: 'Создаем рекламу, которой доверяют',
    sub_title: 'Привлекаем блогеров и лидеров мнений, чтобы ваш бизнес стал доступнее для тысяч клиентов. ',
    items: [
        {
            image: '/images/services/smm/creating-ad_1.webp',
            icon: <CreatingAd1SVG/>,
            title: 'Тщательный подбор',
            description: 'анализируем блогеров, их аудиторию и репутацию, чтобы сотрудничество принесло максимальный результат.'
        },
        {
            image: '/images/services/smm/creating-ad_2.webp',
            icon: <CreatingAd2SVG/>,
            title: 'Разработка креативных интеграций',
            description: 'анализируем блогеров, их аудиторию и репутацию, чтобы сотрудничество принесло максимальный результат.'
        },
        {
            image: '/images/services/smm/creating-ad_3.webp',
            icon: <CreatingAd3SVG/>,
            title: 'Оценка эффективности',
            description: 'измеряем охваты, вовлеченность и конверсии, чтобы вы видели, как инфлюенсеры влияют на рост вашего бизнеса.'
        }
    ]
}

export const smmTeamMembers: ISmmTeamMembers = {
    title: 'Ваш личный SMM-отдел из 6 экспертов',
    items: [
        {
            image: <TeamMember1SVG />,
            number: '01',
            title: 'Project Manager',
            description: "Координирует работу команды, управляет сроками и постоянно взаимодействует с вами для достижения поставленных целей.",
        },
        {
            image: <TeamMember2SVG />,
            number: '02',
            title: 'SMM-менеджер',
            description: "Разрабатывает стратегию продвижения, анализирует аудиторию и конкурентов, планирует контент и рекламные кампании.",
        },
        {
            image: <TeamMember3SVG />,
            number: '03',
            title: 'Мобилограф',
            description: "Создает динамичный визуальный контент: фото, видео, Reels — все, что привлекает и удерживает внимание аудитории.",
        },
        {
            image: <TeamMember4SVG />,
            number: '04',
            title: 'Графический дизайнер',
            description: "Разрабатывает уникальные визуальные решения, создавая графику, которая выделит ваш бренд среди конкурентов.",
        },
        {
            image: <TeamMember5SVG />,
            number: '05',
            title: 'Копирайтер',
            description: "Пишет тексты, которые цепляют и побуждают к действию: посты, заголовки, описания продуктов и услуг.",
        },
        {
            image: <TeamMember6SVG />,
            number: '06',
            title: 'Таргетолог',
            description: "Привлечет вашу целевую аудиторию и настроит рекламу для максимального количества заявок и новых клиентов.",
        }
    ]
}

