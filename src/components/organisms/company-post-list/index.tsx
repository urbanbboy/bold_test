'use client';

// import InstagramSVG from '@/assets/posts/instagram.svg'
import TikTok from '@/assets/posts/tiktok.svg'
import { ButtonWithIcon } from '@/components/atoms/button-with-icon'
import { Heading } from '@/components/atoms/heading'
import { CompanyPostItem } from '@/components/molecules/company-post-item'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'


const data = {
    title: "Как мы помогли другим бизнесам расти?",
    items: [
        {
            image: "/images/main_page/company_post.png",
            title: "Привлекли клиентов на сумму 130 000 $ в агентство недвижимости за 1,5 недели",
            company_name: "Konush nedvijimost",
            created_at: "2025-02-11",
            tags: [
                {
                    tags: "SMM"
                },
                {
                    tags: "Таргет"
                },
                {
                    tags: "Маркетинг"
                },
            ],
            social_media: [
                {
                    title: "подписчиков в Instagram",
                    logo: <TikTok />,
                    subscribers: "+10,5K"
                },
                {
                    title: "просмотров в TikTok",
                    logo: <TikTok />,
                    subscribers: "1,5 млн"
                },
            ]
        },
        {
            image: "/images/main_page/company_post.png",
            title: "Привлекли клиентов на сумму 130 000 $ в агентство недвижимости за 1,5 недели",
            company_name: "Konush nedvijimost",
            created_at: "2025-02-11",
            tags: [
                {
                    tags: "SMM"
                },
                {
                    tags: "Таргет"
                },
                {
                    tags: "Маркетинг"
                },
            ],
            social_media: [
                {
                    title: "подписчиков в Instagram",
                    logo: <TikTok />,
                    subscribers: "+10,5K"
                },
                {
                    title: "просмотров в TikTok",
                    logo: <TikTok />,
                    subscribers: "1,5 млн"
                },
            ]
        },
        {
            image: "/images/main_page/company_post.png",
            title: "Привлекли клиентов на сумму 130 000 $ в агентство недвижимости за 1,5 недели",
            company_name: "Konush nedvijimost",
            created_at: "2025-02-11",
            tags: [
                {
                    tags: "SMM"
                },
                {
                    tags: "Таргет"
                },
                {
                    tags: "Маркетинг"
                },
            ],
            social_media: [
                {
                    title: "подписчиков в Instagram",
                    logo: <TikTok />,
                    subscribers: "+10,5K"
                },
                {
                    title: "просмотров в TikTok",
                    logo: <TikTok />,
                    subscribers: "1,5 млн"
                },
            ]
        },
        {
            image: "/images/main_page/company_post.png",
            title: "Привлекли клиентов на сумму 130 000 $ в агентство недвижимости за 1,5 недели",
            company_name: "Konush nedvijimost",
            created_at: "2025-02-11",
            tags: [
                {
                    tags: "SMM"
                },
                {
                    tags: "Таргет"
                },
                {
                    tags: "Маркетинг"
                },
            ],
            social_media: [
                {
                    title: "подписчиков в Instagram",
                    logo: <TikTok />,
                    subscribers: "+10,5K"
                },
                {
                    title: "просмотров в TikTok",
                    logo: <TikTok />,
                    subscribers: "1,5 млн"
                },
            ]
        },
        {
            image: "/images/main_page/company_post.png",
            title: "Привлекли клиентов на сумму 130 000 $ в агентство недвижимости за 1,5 недели",
            company_name: "Konush nedvijimost",
            created_at: "2025-02-11",
            tags: [
                {
                    tags: "SMM"
                },
                {
                    tags: "Таргет"
                },
                {
                    tags: "Маркетинг"
                },
            ],
            social_media: [
                {
                    title: "подписчиков в Instagram",
                    logo: <TikTok />,
                    subscribers: "+10,5K"
                },
                {
                    title: "просмотров в TikTok",
                    logo: <TikTok />,
                    subscribers: "1,5 млн"
                },
            ]
        }
    ]
}


export const CompanyPostList = () => {
    const mobilePosts = data.items.slice(0, 3)

    return (
        <div className="w-screen overflow-x-hidden py-20 bg-background-gray">
            <div className="max-w-[1280px] m-auto flex flex-col lg:flex-row lg:justify-between gap-5 mb-8 px-5 lg:px-0">
                <Heading as="h2" className="lg:w-3/4">{data.title}</Heading>
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
                        {data.items.map((post, idx) => (
                            <CarouselItem key={idx} className="md:basis-1/2 xl:basis-1/3">
                                <CompanyPostItem {...post} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <div className="flex flex-col md:hidden">
                    {mobilePosts.map((post, idx) => (
                        <CompanyPostItem key={idx} {...post} />
                    ))}
                </div>
            </div>
        </div>
    )
}




