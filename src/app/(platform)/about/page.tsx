'use client';

import { CostCalculationForm } from "@/components/forms/cost-calculation-form";
import { CompanyInfo } from "@/components/organisms/company-info";
import { CompanyPartners } from "@/components/organisms/company-partners";
import { CompanyPostList } from "@/components/organisms/company-post-list";
import { CompanyTeam } from "@/components/organisms/company-team";
import { OurPhilosophy } from "@/components/organisms/our-philosophy";
import { PartnerReviewList } from "@/components/organisms/partner-review-list";
import { FormLayout } from "@/components/templates/form-layout";
import { PageTitleLayout } from "@/components/templates/page-title-layout";


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
            <OurPhilosophy />
            <CompanyInfo />
            <CompanyTeam />
            <CompanyPostList />
            <CompanyPartners />
            <PartnerReviewList />
            <FormLayout
                title={'Рассчитайте стоимость услуги'} 
                sub_title={"Получите решение для вашего бизнеса!"} 
                nestedForm={<CostCalculationForm />}
            />
        </>
    );
}

export default AboutPage;