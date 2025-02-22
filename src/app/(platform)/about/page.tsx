'use client';

import { CostCalculationForm } from "@/components/forms/cost-calculation-form";
import { CompanyInfo } from "@/components/organisms/company-info";
import { CompanyPartners } from "@/components/organisms/company-partners";
import { CompanyPostList } from "@/components/organisms/company-post-list";
import { CompanyTeam } from "@/components/organisms/company-team";
import { InfoCard } from "@/components/organisms/info-card";
import { PartnerReviewList } from "@/components/organisms/partner-review-list";
import { FormLayout } from "@/components/templates/form-layout";
import { PageTitleLayout } from "@/components/templates/page-title-layout";
import MobileCardSVG from '@/assets/our-philosophy/mobile_card.svg'


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


const AboutPage = () => {
    return (
        <>
            <PageTitleLayout
                title={"Мы меняем представление о маркетинге в Центральной Азии"}
                button_text={"Получить консультацию"}
                breadcrumb={[
                    { text: 'Главная', href: '/home' },
                    { text: 'О нас', href: '/about' },
                ]}
            />
            <InfoCard
                title={"Результаты, которые работают на ваш бизнес"}
                sub_title={""}
                description={"Мы понимаем, что для предпринимателей важны не просто идеи, а измеримые результаты - рост заявок, привлечение клиентов и увеличение прибыли."}
                image={"/images/about_page/our_philosophy.webp"}
                card_title={"Наша философия"}
                card_description={"Работать для вашего успеха, предлагая стратегии, которые решают именно ваши бизнес-задачи и обеспечивают конкретные достижения."}
                card_icon={<MobileCardSVG />}
            />
            <CompanyInfo />
            <CompanyTeam />
            <CompanyPostList />
            <CompanyPartners />
            <PartnerReviewList />
            <FormLayout
                title={'Рассчитайте стоимость услуги'}
                nestedForm={
                    <CostCalculationForm
                        business_type={businessTypes}
                        service_type={servicesTypes}
                    />
                }
            />
        </>
    );
}

export default AboutPage;