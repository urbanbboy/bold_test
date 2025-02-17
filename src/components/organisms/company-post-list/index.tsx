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

    return (
        <div className='w-full max-w-[1920px] px-5 lg:px-14 xl:40 mt-14 mb-20 md:mb-40'>
            <div className='flex flex-col lg:flex-row lg:justify-between gap-5 mb-8'>
                <Heading as='h2' className='md:w-3/4'>{data.title}</Heading>
                <Link href='/cases' className='flex items-end'>
                    <ButtonWithIcon
                        variant='feature'
                        className=''
                    >
                        Все кейсы
                    </ButtonWithIcon>
                </Link>
            </div>
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
                    className="hidden md:flex w-full max-w-[1920px]"
                >
                    <CarouselContent>
                        {data.items.map((post, idx) => (
                            <CarouselItem key={idx} className="md:basis-1/2 xl:basis-1/3">
                                <CompanyPostItem
                                    key={idx}
                                    {...post}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <div className='flex flex-col md:hidden'>
                    {data.items.map((post, idx) => (
                        <CompanyPostItem
                            key={idx}
                            {...post}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}



