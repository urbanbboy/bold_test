'use client'

import { useGetStaticPageBySlugQuery } from "@/api/StaticPages";
import { RequestHandler } from "@/components/atoms/request-handler";
import { SmmFeedbackForm } from "@/components/forms/smm-feedback-form";
import { ClientReviewList } from "@/components/organisms/client-review-list";
import { CompanyServiceCardList } from "@/components/organisms/company-service-card-list";
import { ServicePostList } from "@/components/organisms/service-post-list";
import { ServiceStaticCardList } from "@/components/organisms/service-static-card-list";
import { SMMPartnersCarousel } from "@/components/organisms/smm-partner-carousel";
import { SmmStats } from "@/components/organisms/smm-stats";
import { FormLayout } from "@/components/templates/form-layout";
import { PageTitleLayout } from "@/components/templates/page-title-layout";
import { smmCreatingAdData, smmTeamMembers } from "@/consts/data";
import { useSlug } from "@/hooks/useSlug";


const serviceData = {
    title: 'Подход, который выделит ваш бренд среди конкурентов',
    items: [
        {
            image: "/images/about_page/our_philosophy.webp",
            image_right: false,
            title: 'Погружение в ваш бизнес',
            description: 'Анализируем рынок, изучаем конкурентов, выявляем особенности вашей целевой аудитории. Вместе с вами формируем цели продвижения.',
        },
        {
            image: "/images/about_page/our_philosophy.webp",
            image_right: true,
            title: 'Разработка стратегии',
            description: 'Создаем уникальную SMM-стратегию, которая выделяет ваш бренд и приносит реальные результаты.',
        },
        {
            image: "/images/about_page/our_philosophy.webp",
            image_right: false,
            title: 'Создание контента',
            description: 'Креатив-команда: мобилограф, копирайтер и дизайнер — разрабатывает визуалы и тексты, которые привлекают внимание и побуждают к покупкам.',
        },
        {
            image: "/images/about_page/our_philosophy.webp",
            image_right: true,
            title: 'Настройка рекламы',
            description: 'Таргетолог настраивает рекламу так, чтобы привлекать вашу целевую аудиторию и создавать поток заявок.',
        },
    ]
}

const partnersData = [
    {
        id: "1",
        image: '/images/services/smm/smm_partner.webp',
    },
    {
        id: "2",
        image: '/images/services/smm/smm_partner.webp',
    },
    {
        id: "3",
        image: '/images/services/smm/smm_partner.webp',
    },
    {
        id: "4",
        image: '/images/services/smm/smm_partner.webp',
    },
    {
        id: "5",
        image: '/images/services/smm/smm_partner.webp',
    },
    {
        id: "6",
        image: '/images/services/smm/smm_partner.webp',
    },
    {
        id: "7",
        image: '/images/services/smm/smm_partner.webp',
    },
]

const promotionTypes = [
    { id: 1, name: "Брендинг" },
    { id: 2, name: "SMM-продвижение" },
    { id: 3, name: "Продакшн" },
    { id: 4, name: "Дизайн" },
    { id: 5, name: "Контекстная реклама" },
    { id: 6, name: "Таргетированная реклама" },
    { id: 7, name: "Создание сайта" },
];

const businessTypes = [
    { id: 1, name: "B2C" },
    { id: 2, name: "B2B" },
    { id: 3, name: "B2G" },
];

const SmmPage = () => {
    const slug = useSlug()
    const { data, isLoading, error } = useGetStaticPageBySlugQuery(slug)

    return (
        <RequestHandler
            isLoading={isLoading}
            error={error}
            data={data}
        >
            {data &&
                <PageTitleLayout
                    title={data.title}
                    sub_title={data.content}
                    button_text={"Получить консультацию"}
                    breadcrumb={[
                        { text: 'Главная', href: '/home' },
                        { text: 'Digital продвижение', href: '/services/smm' },
                    ]}
                    bg_image={data.image}
                />
            }
            <ServicePostList
                title={serviceData.title}
                items={serviceData.items}
            />
            <SMMPartnersCarousel
                title={'Контент, который продает'}
                sub_title={'Мы создаем визуалы, которые выделяют ваш бренд среди конкурентов'}
                partnerList={partnersData}
            />
            <ServiceStaticCardList
                title={smmCreatingAdData.title}
                eyebrow={smmCreatingAdData.eyebrow}
                sub_title={smmCreatingAdData.sub_title}
                items={smmCreatingAdData.items}
            />
            <CompanyServiceCardList
                title={smmTeamMembers.title}
                items={smmTeamMembers.items}
            />
            <SmmStats />
            <ClientReviewList hasSubTitle />
            <FormLayout
                title={"Узнайте стоимость SMM-продвижения"}
                nestedForm={
                    <SmmFeedbackForm
                        business_types={businessTypes}
                        promotion_types={promotionTypes}
                    />
                }
            />
        </RequestHandler>
    );
}

export default SmmPage;