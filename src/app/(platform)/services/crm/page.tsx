import { CrmIcon } from "@/assets/info-card";
import { CrmFeedbackForm } from "@/components/forms/crm-feedback-form";
import { Award } from "@/components/organisms/award";
import { CompanyPostList } from "@/components/organisms/company-post-list";
import { CompanyServiceCardList } from "@/components/organisms/company-service-card-list";
import { InfoCard } from "@/components/organisms/info-card";
import { ServicePostList } from "@/components/organisms/service-post-list";
import { FormLayout } from "@/components/templates/form-layout";
import { PageTitleLayout } from "@/components/templates/page-title-layout";
import { serviceCrmData } from "@/consts/data";

const serviceData = {
    title: 'Наши услуги по интеграции CRM',
    items: [
        {
            image: "/images/about_page/our_philosophy.webp",
            image_right: false,
            title: 'Рекламные видеоролики',
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

const Crm = () => {
    return (
        <div>
            <PageTitleLayout
                title={"Управляйте клиентами эффективно"}
                sub_title={"Интеграция CRM-систем для оптимизации процессов и роста продаж"}
                button_text={"Заказать интерграцию"}
                breadcrumb={[
                    { text: 'Главная', href: '/home' },
                    { text: 'Интеграция CRM', href: '/services/crm' },
                ]}
            />
            <CompanyServiceCardList
                title={serviceCrmData.title}
                items={serviceCrmData.items}
            />
            <InfoCard
                title={"Наш подход к интеграции CRM"}
                description={"Мы анализируем потребности вашего бизнеса и подбираем подходящую CRM-систему, которая соответствует вашим целям. Наша команда выполняет плавную миграцию данных и настраивает систему так, чтобы она полностью поддерживала ваши бизнес-процессы."}
                card_title={"Мы также обучаем вашу команду"}
                card_description={"и предоставляем регулярную техническую поддержку для удобного использования CRM."}
                card_icon={<CrmIcon />}
                image={'/images/services/crm/info_card.png'}
            />
            <Award
                badgeTitle={"Партнерство"}
                title={"Мы официальные партнеры Битрикс24"}
                image={"/images/services/crm/sertificate.png"}
            />
            <ServicePostList
                title={serviceData.title}
                items={serviceData.items}
            />
            <CompanyPostList />
            <FormLayout
                nestedForm={
                    <CrmFeedbackForm
                        business_types={[]}
                        service_types={[]}
                    />
                }
            />
        </div>
    );
}

export default Crm;