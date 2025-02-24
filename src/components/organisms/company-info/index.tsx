"use client";

import CompanyInfoSVG from '@/assets/backgrounds/company_info.svg'
import { StatItem } from '@/components/molecules/stat-item';
import { Stat1, Stat2, Stat3, Stat4 } from '@/assets/company-info';


const stats: { title: string, sub_title: string, icon: React.ReactNode }[] = [
    {
        title: '30+',
        sub_title: 'опытных экспертов, которые работают на ваш результат',
        icon: <Stat1 />,
    },
    {
        title: 'Топ-1',
        sub_title: 'маркетинговая компания по версии The Great Award of the Year 2023 за выдающиеся достижения в продвижении бизнеса.',
        icon: <Stat2 />,
    },
    {
        title: '60+',
        sub_title: 'успешных проектов, которые помогли нашим клиентам увеличить продажи на 189%.',
        icon: <Stat3 />,
    },
    {
        title: '35+',
        sub_title: 'опыт в отраслях бизнеса — от салонов красоты до строительных компаний.',
        icon: <Stat4 />,
    },
]

export const CompanyInfo = () => {
    return (
        <section className='w-full max-w-[1920px] bg-background-dark'>
            <div className='max-w-[1280px] m-auto relative px-4 py-14 lg:py-32 text-white overflow-hidden z-10'>
                <h1 className='text-3xl md:text-5xl font-bold mb-5'>Bold Brands International</h1>
                <p className='text-accent text-xl'>совместно создаём прочную основу и уверенное будущее для вашей компании</p>
                <div className='flex justify-center flex-wrap gap-7 mt-8'>
                    {stats.map((stat, index) => (
                        <StatItem
                            key={index}
                            title={stat.title}
                            sub_title={stat.sub_title}
                            icon={stat.icon}
                            idx={index}
                        />
                    ))}
                </div>
                <div>
                    <CompanyInfoSVG className="absolute left-0 lg:left-auto -z-10 bottom-0 max-w-[1920px] object-cover" />
                </div>
            </div>
        </section>
    )
}
