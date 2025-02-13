'use client';

import { CompanyMember } from '@/components/molecules/company-member'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import React from 'react'

const data = {
    title: 'Команда, которой можно доверять',
    sub_title: 'Каждый из нас вносит уникальный вклад, помогая вашему бизнесу расти и процветать. Познакомьтесь с людьми, которые превращают идеи в реальность',
    items: [
        {
            name: 'Талгар Чокушов',
            position: 'Генеральный директор',
            image: '/images/about_page/team_member.webp'
        },
        {
            name: 'Талгар Чокушов',
            position: 'Генеральный директор',
            image: '/images/about_page/team_member.webp'
        },
        {
            name: 'Талгар Чокушов',
            position: 'Генеральный директор',
            image: '/images/about_page/team_member.webp'
        },
        {
            name: 'Талгар Чокушов',
            position: 'Генеральный директор',
            image: '/images/about_page/team_member.webp'
        },
        {
            name: 'Талгар Чокушов',
            position: 'Генеральный директор',
            image: '/images/about_page/team_member.webp'
        },
        {
            name: 'Талгар Чокушов',
            position: 'Генеральный директор',
            image: '/images/about_page/team_member.webp'
        },
        {
            name: 'Талгар Чокушов',
            position: 'Генеральный директор',
            image: '/images/about_page/team_member.webp'
        },
    ]
}

export const CompanyTeam = () => {
    return (
        <div className='max-w-[1920px] flex justify-center items-center'>
            <div className='max-w-[1280px] space-y-4 md:space-y-8 py-14 lg:py-36 overflow-hidden'>
                <h1 className='font-bold text-3xl px-5 md:text-5xl lg:text-7xl w-full md:w-2/3'>{data.title}</h1>
                <p className='text-gray px-5 w-full md:w-2/3'>{data.sub_title}</p>
                <div className=''>
                    <Carousel
                        opts={{
                            align: "center",
                        }}
                        plugins={[
                            Autoplay({
                                delay: 8000,
                            })
                        ]}
                        className="w-full"
                    >
                        <CarouselContent>
                            {data.items.map((member, idx) => (
                                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/4 p-4">
                                    <CompanyMember
                                        key={idx}
                                        {...member}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>

                </div>
            </div>
        </div>
    )
}