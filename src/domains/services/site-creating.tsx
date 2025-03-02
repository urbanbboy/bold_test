'use client';

import { useGetStaticPageBySlugQuery } from "@/api/StaticPages";
import { useGetSiteTypesQuery } from "@/api/Types";
import { RequestHandler } from "@/components/atoms/request-handler";
import { SiteCreatingFeedbackForm } from "@/components/forms/site-creating-form";
import { CompanyPostList } from "@/components/organisms/company-post-list";
import { ServicePostList } from "@/components/organisms/service-post-list";
import { FormLayout } from "@/components/templates/form-layout";
import { PageTitleLayout } from "@/components/templates/page-title-layout";
import { useAppData } from "@/context/app-context";
import useScrollToFeedback from "@/hooks/useScrollToFeedback";
import { useSlug } from "@/hooks/useSlug";

const serviceData = {
    title: 'Наш подход к созданию сайтов',
    description: 'Мы выявляем уникальные особенности вашего бренда и формируем его четкое позиционирование. Наши креативные дизайны привлекают внимание и удерживают клиентов, делая ваш сайт запоминающимся. Мы интегрируем современные технологии, гарантируя функциональность и эффективность вашего веб-решения.',
    items: [
        {
            image: "/images/about_page/our_philosophy.webp",
            image_right: false,
            title: 'Рекламные видеоролики',
            sub_title: 'Привлекаем внимание и конвертируем посетителей',
            description: 'Анализируем рынок, изучаем конкурентов, выявляем особенности вашей целевой аудитории. Вместе с вами формируем цели продвижения.',
        },
        {
            image: "/images/about_page/our_philosophy.webp",
            image_right: true,
            title: 'Разработка стратегии',
            sub_title: 'Привлекаем внимание и конвертируем посетителей',
            description: 'Создаем уникальную SMM-стратегию, которая выделяет ваш бренд и приносит реальные результаты.',
        },
        {
            image: "/images/about_page/our_philosophy.webp",
            image_right: false,
            title: 'Создание контента',
            sub_title: 'Привлекаем внимание и конвертируем посетителей',
            description: 'Креатив-команда: мобилограф, копирайтер и дизайнер — разрабатывает визуалы и тексты, которые привлекают внимание и побуждают к покупкам.',
        },
        {
            image: "/images/about_page/our_philosophy.webp",
            image_right: true,
            title: 'Настройка рекламы',
            sub_title: 'Привлекаем внимание и конвертируем посетителей',
            description: 'Таргетолог настраивает рекламу так, чтобы привлекать вашу целевую аудиторию и создавать поток заявок.',
        },
    ]
}

const SiteCreatingPage = () => {
    const slug = useSlug()
    const { data, isLoading, error } = useGetStaticPageBySlugQuery(slug)
    const { data: site_types } = useGetSiteTypesQuery()
    const { business_types } = useAppData()
    const { ref, scrollToFeedback } = useScrollToFeedback()


    return (
        <RequestHandler
            isLoading={isLoading}
            error={error}
            data={data}
        >
            {data &&
                <PageTitleLayout
                    scrollToFeedback={scrollToFeedback}
                    title={data.title}
                    sub_title={data.content}
                    bg_image={data.image}
                    button_text={"Заказать сайт"}
                    breadcrumb={[
                        { text: 'Главная', href: '/home' },
                        { text: 'Создание сайтов', href: '/site-creating' },
                    ]}
                    isGray
                />
            }
            <ServicePostList
                title={serviceData.title}
                description={serviceData.description}
                items={serviceData.items}
            />
            <CompanyPostList />
            <FormLayout
                ref={ref}
                title={"Рассчитайте стоимость услуги "}
                nestedForm={
                    <SiteCreatingFeedbackForm
                        business_types={business_types}
                        site_types={site_types || []} />
                }
            />
        </RequestHandler>
    );
}

export default SiteCreatingPage;