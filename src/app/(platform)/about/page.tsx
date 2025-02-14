'use client';

import { AboutTitle } from "@/components/organisms/about-page-title";
import { CompanyInfo } from "@/components/organisms/company-info";
import { CompanyPartners } from "@/components/organisms/company-partners";
import { CompanyPostList } from "@/components/organisms/company-post-list";
import { CompanyTeam } from "@/components/organisms/company-team";
import { OurPhilosophy } from "@/components/organisms/our-philosophy";
import { PartnerReviewList } from "@/components/organisms/partner-review-list";
import { CostCalculationLayout } from "@/components/templates/cost-calculation-layout";


const AboutPage = () => {
    return (
        <>
            <AboutTitle />
            <OurPhilosophy />
            <CompanyInfo />
            <CompanyTeam />
            <CompanyPostList />
            <CompanyPartners />
            <PartnerReviewList />
            <CostCalculationLayout />
        </>
    );
}

export default AboutPage;