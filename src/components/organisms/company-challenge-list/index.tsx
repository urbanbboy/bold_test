import React from 'react'
import Challenge1SVG from '@/assets/company-challenge/challenge_1.svg'
import Challenge2SVG from '@/assets/company-challenge/challenge_2.svg'
import Challenge3SVG from '@/assets/company-challenge/challenge_3.svg'
import Challenge4SVG from '@/assets/company-challenge/challenge_4.svg'
import Challenge5SVG from '@/assets/company-challenge/challenge_5.svg'
import Challenge6SVG from '@/assets/company-challenge/challenge_6.svg'
import ChallengeCard from '@/components/molecules/company-challenge-card'
import ChallengesBgSVG from '@/assets/backgrounds/challenges_bg.svg'

interface ItemProps {
    logo: React.ReactNode;
    title: string;
    description: string;
}

interface companyChallengeDataProps {
    title: string;
    items: ItemProps[]
}

const companyChallengeData: companyChallengeDataProps = {
    title: 'Что мешает вашему бизнесу расти?',
    items: [
        {
            logo: <Challenge1SVG />,
            title: 'Отсутствие маркетинговой стратегии',
            description: 'Без четкого плана результаты будут хаотичными. Мы разработаем индивидуальную стратегию для вашего бизнеса, чтобы достичь конкретных целей.'
        },
        {
            logo: <Challenge2SVG />,
            title: 'Низкие продажи и недостаток клиентов',
            description: 'Продолжаете вкладываться в бизнес, но продажи не растут? Мы привлечем новых клиентов и увеличим выручку помощью проверенных маркетинговых стратегий.'
        },
        {
            logo: <Challenge3SVG />,
            title: 'Неэффективная реклама  и перерасход бюджета',
            description: 'Без четкого плана результаты будут хаотичными. Мы разработаем индивидуальную стратегию для вашего бизнеса, чтобы достичь конкретных целей.'
        },
        {
            logo: <Challenge4SVG />,
            title: 'Низкая узнаваемость  бренда',
            description: 'Без четкого плана результаты будут хаотичными. Мы разработаем индивидуальную стратегию для вашего бизнеса, чтобы достичь конкретных целей.'
        },
        {
            logo: <Challenge5SVG />,
            title: 'Слабое онлайн-присутствие',
            description: 'Без четкого плана результаты будут хаотичными. Мы разработаем индивидуальную стратегию для вашего бизнеса, чтобы достичь конкретных целей.'
        },
        {
            logo: <Challenge6SVG />,
            title: 'Нехватка времени и ресурсов для маркетинга',
            description: 'Без четкого плана результаты будут хаотичными. Мы разработаем индивидуальную стратегию для вашего бизнеса, чтобы достичь конкретных целей.'
        },
    ]
}


export const CompanyChallengeList = () => {
    return (
        <div className="w-full max-w-[1920px] px-4 md:px-40 lg:py-20 bg-[#FAFAFC]">
            <div className="relative py-4 lgc:py-32 z-10 overflow-hidden">
                <h1 className="text-3xl lg:text-6xl font-bold text-center">{companyChallengeData.title}</h1>
                <div className="relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 mt-5 lg:mt-14">
                        {companyChallengeData.items.map((challenge, index) => (
                            <ChallengeCard
                                key={index}
                                idx={index}
                                logo={challenge.logo}
                                title={challenge.title}
                                description={challenge.description}
                            />
                        ))}
                    </div>
                </div>
                <ChallengesBgSVG className="hidden lg:block absolute top-52 2xl:left-64 -z-10 max-w-[1920px] m-auto" />
            </div>
        </div>
    );
};
