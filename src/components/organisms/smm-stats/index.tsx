"use client";

import Stat1SVG from '@/assets/company-info/stat_1.svg';
import Stat2SVG from '@/assets/company-info/stat_2.svg';
import Stat3SVG from '@/assets/company-info/stat_3.svg';
import Stat4SVG from '@/assets/company-info/stat_4.svg';

import MobileStat1SVG from '@/assets/company-info/mobile-stat_1.svg';
import MobileStat2SVG from '@/assets/company-info/mobile-stat_2.svg';
import MobileStat3SVG from '@/assets/company-info/mobile-stat_3.svg';
import MobileStat4SVG from '@/assets/company-info/mobile-stat_4.svg';


import CompanyInfoSVG from '@/assets/backgrounds/company_info.svg'
import { StatItem } from '@/components/molecules/stat-item';
import { Heading } from '@/components/atoms/heading';


const stats: { title: string, sub_title: string, icon: React.ReactNode, mobile_icon: React.ReactNode }[] = [
    {
        title: '150+',
        sub_title: 'Успешных SMM-кампаний.',
        icon: <Stat1SVG />,
        mobile_icon: <MobileStat1SVG/>
    },
    {
        title: '600%',
        sub_title: 'ROI от рекламы: до',
        icon: <Stat2SVG />,
        mobile_icon: <MobileStat2SVG/>
    },
    {
        title: '+80%',
        sub_title: 'Средний рост заявок у клиентов:',
        icon: <Stat3SVG />,
        mobile_icon: <MobileStat3SVG/>
    },
    {
        title: '1,5+',
        sub_title: 'просмотров органического контента (млн)',
        icon: <Stat4SVG />,
        mobile_icon: <MobileStat4SVG/>
    },
]

export const SmmStats = () => {
    return (
        <div className='w-full max-w-[1920px]'>
            <div className='relative bg-background-dark py-14 lg:py-36 px-4 md:px-40 text-white overflow-hidden z-10'>
                <Heading as='h4' className='text-gray font-light uppercase text-lg md:text-xl max-w-sm'>Цифры, которые говорят сами за себя</Heading>
                <div className='flex justify-center flex-wrap gap-7 mt-8'>
                    {stats.map((stat, index) => (
                        <StatItem
                            key={index}
                            title={stat.title}
                            sub_title={stat.sub_title}
                            icon={stat.icon}
                            mobile_icon={stat.mobile_icon}
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
