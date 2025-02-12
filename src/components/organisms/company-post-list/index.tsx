import Instagram from '@/assets/posts/instagram.svg'
import TikTok from '@/assets/posts/tiktok.svg'
import { CompanyPostItem } from '@/components/molecules/company-post-item'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
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
                    logo: <Instagram />,
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
                    logo: <Instagram />,
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
                    logo: <Instagram />,
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
                    logo: <Instagram />,
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
                    logo: <Instagram />,
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
        <div className='w-full max-w-[1920px] px-4 mt-14 lg:px-40 mb-20 md:mb-40'>
            <div className='flex flex-col lg:flex-row lg:justify-between gap-5 mb-8'>
                <h1 className='text-4xl lg:text-7xl font-bold'>{data.title}</h1>
                <Button asChild variant={'clean'} className="mt-auto w-fit text-[#FF2B44] py-2 px-4 gap-1 text-center hover:bg-slate-100">
                    <Link href={'/cases'}>
                        <span className="">Все кейсы</span>
                        <ChevronRight />
                    </Link>
                </Button>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-12'>
                {data.items.map((post, idx) => (
                    <CompanyPostItem
                        key={idx}
                        {...post}
                    />
                ))}
            </div>
        </div>
    )
}


