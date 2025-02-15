import CreatingAd1SVG from '@/assets/services/smm/creating-ad_1.svg';
import CreatingAd2SVG from '@/assets/services/smm/creating-ad_2.svg';
import CreatingAd3SVG from '@/assets/services/smm/creating-ad_3.svg';
import { ISmmCreatingAdData } from './types';



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