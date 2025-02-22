'use client';

import { CompanyPostList } from "@/components/organisms/company-post-list";
import { CompanyServiceCardList } from "@/components/organisms/company-service-card-list";
import { InfoCard } from "@/components/organisms/info-card";
import { ServicePostList } from "@/components/organisms/service-post-list";
import { PageTitleLayout } from "@/components/templates/page-title-layout";
import { smmTeamMembers } from "@/consts/data";
import MobileCardSVG from '@/assets/our-philosophy/mobile_card.svg'
import { FormLayout } from "@/components/templates/form-layout";
import { BrandingFeedbackForm } from "@/components/forms/branding-feedback-form";


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

const Brading = () => {
    return (
        <div>
            <PageTitleLayout
                title={"Брендинг, который выделяет вас среди конкурентов"}
                sub_title={"От концепции до реализации — мы сопровождаем вас на каждом этапе создания вашего бренда "}
                button_text={"Получить консультацию"}
                breadcrumb={[
                    { text: 'Главная', href: '/home' },
                    { text: 'Брендинг', href: '/services/branding' },
                ]}
            />
            <ServicePostList
                title={serviceData.title}
                items={serviceData.items}
            />
            <CompanyServiceCardList
                title={smmTeamMembers.title}
                items={smmTeamMembers.items}
            />
            <CompanyPostList />
            <InfoCard
                title={"Результаты, которые работают на ваш бизнес"}
                sub_title={"Ваш внешний отдел дизайна"}
                description={"Мы понимаем, что для предпринимателей важны не просто идеи, а измеримые результаты - рост заявок, привлечение клиентов и увеличение прибыли."}
                image={"/images/about_page/our_philosophy.webp"}
                card_title={"Наша философия"}
                card_description={"Работать для вашего успеха, предлагая стратегии, которые решают именно ваши бизнес-задачи и обеспечивают конкретные достижения."}
                card_icon={<MobileCardSVG />}
            />
            <FormLayout
                title={"Узнайте стоимость разработки бренда"}
                sub_title={"Оставьте контакты для связи, и мы перезвоним вам"}
                nestedForm={
                    <BrandingFeedbackForm
                        business_types={businessTypes}
                        service_types={servicesTypes}
                    />
                }
            />
        </div>
    );
}

export default Brading;