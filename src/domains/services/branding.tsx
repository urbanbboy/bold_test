'use client';

import { CompanyPostList } from "@/components/organisms/company-post-list";
import { CompanyServiceCardList } from "@/components/organisms/company-service-card-list";
import { InfoCard } from "@/components/organisms/info-card";
import { ServicePostList } from "@/components/organisms/service-post-list";
import { PageTitleLayout } from "@/components/templates/page-title-layout";
import { serviceBrandingData } from "@/consts/data";
import { FormLayout } from "@/components/templates/form-layout";
import { BrandingFeedbackForm } from "@/components/forms/branding-feedback-form";
import { BrandingIcon } from "@/assets/info-card";
import { useSlug } from "@/hooks/useSlug";
import { useGetStaticPageBySlugQuery } from "@/api/StaticPages";
import { RequestHandler } from "@/components/atoms/request-handler";


const serviceData = {
    title: 'Создаем бренд, который говорит сам за себя',
    items: [
        {

            image: "/images/about_page/our_philosophy.webp",
            image_right: false,
            title: 'Нейминг',
            sub_title: 'Названия, которые остаются в памяти',
            description: 'Мы придумываем уникальные и яркие названия, которые отражают суть вашего бизнеса и вызывают эмоции у клиентов.',
            tags: [
                {
                    tags: 'Глубокий анализ рынка и конкурентов',
                },
                {
                    tags: 'Разработка креативных и вдохновляющих концепций'
                }
            ]
        },
        {

            image: "/images/about_page/our_philosophy.webp",
            image_right: true,
            title: 'Дизайн логотипа и фирменного стиля',
            sub_title: 'Названия, которые остаются в памяти',
            description: 'Мы придумываем уникальные и яркие названия, которые отражают суть вашего бизнеса и вызывают эмоции у клиентов.',
            tags: [
                {
                    tags: 'Глубокий анализ рынка и конкурентов',
                },
                {
                    tags: 'Разработка креативных и вдохновляющих концепций'
                }
            ]
        },
        {

            image: "/images/about_page/our_philosophy.webp",
            image_right: false,
            title: 'Брендбук',
            sub_title: 'Названия, которые остаются в памяти',
            description: 'Мы придумываем уникальные и яркие названия, которые отражают суть вашего бизнеса и вызывают эмоции у клиентов.',
            tags: [
                {
                    tags: 'Глубокий анализ рынка и конкурентов',
                },
                {
                    tags: 'Разработка креативных и вдохновляющих концепций'
                }
            ]
        },
    ]
}

const servicesTypes = [
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

const BradingPage = () => {
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
                    bg_image={data.image}
                    button_text={"Получить консультацию"}
                    breadcrumb={[
                        { text: 'Главная', href: '/home' },
                        { text: 'Брендинг', href: '/services/branding' },
                    ]}
                    isGray
                />}
            <ServicePostList
                title={serviceData.title}
                items={serviceData.items}
            />
            <CompanyServiceCardList
                title={serviceBrandingData.title}
                items={serviceBrandingData.items}
            />
            <CompanyPostList />
            <InfoCard
                title={"Дизайн-поддержка "}
                sub_title={"Ваш внешний отдел дизайна"}
                description={"Мы регулярно обновляем визуальные материалы вашего бренда, чтобы он оставался современным и привлекательным. Наши эксперты быстро адаптируют дизайн под новые тренды и платформы, поддерживая интерес аудитории."}
                image={"/images/about_page/our_philosophy.webp"}
                card_title={"Наши эксперты"}
                card_description={"быстро адаптируют дизайн под новые тренды и платформы, поддерживая интерес аудитории. С нами ваш бренд всегда выделяется и эффективно взаимодействует с клиентами."}
                card_icon={<BrandingIcon />}
            />
            <FormLayout
                title={"Узнайте стоимость разработки бренда"}
                nestedForm={
                    <BrandingFeedbackForm
                        business_types={businessTypes}
                        service_types={servicesTypes}
                    />
                }
            />
        </RequestHandler>
    );
}

export default BradingPage;