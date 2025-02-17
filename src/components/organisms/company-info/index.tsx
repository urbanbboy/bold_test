"use client";

import Stat1SVG from '@/assets/company-info/stat_1.svg'
import Stat2SVG from '@/assets/company-info/stat_2.svg'
import Stat3SVG from '@/assets/company-info/stat_3.svg'
import Stat4SVG from '@/assets/company-info/stat_4.svg'
import CompanyInfoSVG from '@/assets/backgrounds/company_info.svg'
import { StatItem } from '@/components/molecules/stat-item';


const stats: { title: string, sub_title: string, icon: React.ReactNode }[] = [
    {
        title: '30+',
        sub_title: 'опытных экспертов, которые работают на ваш результат',
        icon: <Stat1SVG />
    },
    {
        title: 'Топ-1',
        sub_title: 'маркетинговая компания по версии The Great Award of the Year 2023 за выдающиеся достижения в продвижении бизнеса.',
        icon: <Stat2SVG />
    },
    {
        title: '60+',
        sub_title: 'успешных проектов, которые помогли нашим клиентам увеличить продажи на 189%.',
        icon: <Stat3SVG />
    },
    {
        title: '35+',
        sub_title: 'опыт в отраслях бизнеса — от салонов красоты до строительных компаний.',
        icon: <Stat4SVG />
    },
]

export const CompanyInfo = () => {
    return (
        <div className='w-full max-w-[1920px]'>
            <div className='relative bg-background-dark py-14 lg:py-36 px-4 md:px-40 text-white overflow-hidden z-10'>
                <h1 className='text-3xl md:text-5xl font-bold mb-5'>Bold Brands International </h1>
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
        </div>
    )
}
