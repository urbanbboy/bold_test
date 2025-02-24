"use client";

import CompanyInfoSVG from '@/assets/backgrounds/company_info.svg'
import { StatItem } from '@/components/molecules/stat-item';
import { Heading } from '@/components/atoms/heading';
import { Stat1, Stat2, Stat3, Stat4 } from '@/assets/company-info';


const stats: { title: string, sub_title: string, icon: React.ReactNode }[] = [
    {
        title: '150+',
        sub_title: 'Успешных SMM-кампаний.',
        icon: <Stat1 />,
    },
    {
        title: '600%',
        sub_title: 'ROI от рекламы: до',
        icon: <Stat2 />,
    },
    {
        title: '+80%',
        sub_title: 'Средний рост заявок у клиентов:',
        icon: <Stat3/>,
    },
    {
        title: '1,5+',
        sub_title: 'просмотров органического контента (млн)',
        icon: <Stat4 />,
    },
]

export const SmmStats = () => {
    return (
        <div className='w-full max-w-[1920px]'>
            <div className='relative bg-background-dark py-14 lg:py-36 px-4 md:px-40 text-white overflow-hidden z-10'>
                <Heading as='h4' className='text-gray font-light uppercase text-lg md:text-xl max-w-sm'>Цифры, которые говорят сами за себя</Heading>
                <div className='flex justify-center flex-wrap gap-7 mt-8 overflow-hidden'>
                    {stats.map((stat, index) => (
                        <StatItem
                            key={index}
                            title={stat.title}
                            sub_title={stat.sub_title}
                            icon={stat.icon}
                            idx={index}
                            isService={true}
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
