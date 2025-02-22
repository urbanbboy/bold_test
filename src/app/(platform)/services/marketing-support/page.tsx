import { MarketingSupportFeedbackForm } from "@/components/forms/marketing-support-form";
import { CompanyPostList } from "@/components/organisms/company-post-list";
import { CompanyServiceCardList } from "@/components/organisms/company-service-card-list";
import { InfoCard } from "@/components/organisms/info-card";
import { MarketingResults } from "@/components/organisms/marketing-results";
import { ServicePostList } from "@/components/organisms/service-post-list";
import { FormLayout } from "@/components/templates/form-layout";
import { PageTitleLayout } from "@/components/templates/page-title-layout";
import { smmTeamMembers } from "@/consts/data";

const serviceData = {
    title: 'Что мы делаем',
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

const MarketingSupport = () => {
    return (
        <div>
            <PageTitleLayout
                title={" Нужна стратегия, а не хаос?"}
                sub_title={"Выстраиваем маркетинг как единую экосистему"}
                button_text={"Заказать интерграцию"}
                breadcrumb={[
                    { text: 'Главная', href: '/home' },
                    { text: 'Комплексное маркетинговое сопровождение', href: '/services/marketing-support' },
                ]}
            />
            <InfoCard
                title={"Комплексное маркетинговое сопровождение"}
                description={"это стратегический подход, который помогает бизнесу не просто заявить о себе, а достичь реальных результатов: увеличить продажи, расширить клиентскую базу и укрепить позиции на рынке."}
                card_title={"В Bold Brands мы:"}
                card_description={"объединяем все ключевые инструменты цифрового маркетинга в единую экосистему, чтобы вы получили максимум отдачи от каждого вложенных средств."}
                card_icon={undefined}
                image={'/images/services/smm/creating-ad_1.webp'}
            />
            <ServicePostList
                title={serviceData.title}
                items={serviceData.items}
            />
            <CompanyServiceCardList
                title={smmTeamMembers.title}
                items={smmTeamMembers.items}
            />
            <MarketingResults />
            <CompanyPostList />
            <FormLayout
                nestedForm={
                    <MarketingSupportFeedbackForm
                        business_types={[]}
                        task_types={[]}
                    />
                }
            />
        </div>
    );
}

export default MarketingSupport;