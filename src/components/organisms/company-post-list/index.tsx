'use client';

import { useGetCompanyPostsQuery } from '@/api/Company';
import TikTok from '@/assets/posts/tiktok.svg'
import { ButtonWithIcon } from '@/components/atoms/button-with-icon'
import { Heading } from '@/components/atoms/heading'
import { RequestHandler } from '@/components/atoms/request-handler';
import { CompanyPostItem } from '@/components/molecules/company-post-item'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'


export const CompanyPostList = () => {
    const { data, isLoading, error } = useGetCompanyPostsQuery()
    const mobilePosts = data?.items.slice(0, 3)

    return (
        <div className="w-screen overflow-x-hidden py-20 bg-background-gray">
            <RequestHandler
                isLoading={isLoading}
                error={error}
                data={data}
            >
                <div className="max-w-[1280px] m-auto flex flex-col lg:flex-row lg:justify-between gap-5 mb-8 px-5 lg:px-0">
                    <Heading as="h2" className="lg:w-3/4">{data?.title}</Heading>
                    <Link href="/cases" className="flex items-end">
                        <ButtonWithIcon variant="feature">Все кейсы</ButtonWithIcon>
                    </Link>
                </div>
                <div className="px-0">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        plugins={[
                            Autoplay({
                                delay: 8000,
                            })
                        ]}
                        className="w-full hidden md:flex"
                    >
                        <CarouselContent className="w-full gap-4">
                            {data?.items.map((post, idx) => (
                                <CarouselItem key={idx} className="md:basis-1/2 xl:basis-1/3">
                                    <CompanyPostItem {...post} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                    <div className="flex flex-col md:hidden">
                        {mobilePosts?.map((post, idx) => (
                            <CompanyPostItem key={idx} {...post} />
                        ))}
                    </div>
                </div>
            </RequestHandler>
        </div>
    )
}




