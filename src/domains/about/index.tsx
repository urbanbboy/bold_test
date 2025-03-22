"use client";

import { CostCalculationForm } from "@/components/forms/cost-calculation-form";
import { CompanyTeam } from "@/components/organisms/company-team";
import { InfoCard } from "@/components/organisms/info-card";
import { FormLayout } from "@/components/templates/form-layout";
import { PageTitleLayout } from "@/components/templates/page-title-layout";
import { OurPhilosophyIcon } from "@/assets/info-card";
import { useGetStaticPageBySlugQuery } from "@/api/StaticPages";
import { useSlug } from "@/hooks/useSlug";

import { useAppData } from "@/context/app-context";
import { useGetPromotionTypesQuery } from "@/api/Types";
import { useTranslations } from "next-intl";
import { useGetCompanyAchievementsQuery } from "@/api/Company";
import dynamic from "next/dynamic";

const CompanyPartners = dynamic(() => import("@/components/organisms/company-partners"));
const PartnerReviewList = dynamic(() => import("@/components/organisms/partner-review-list"));
const Advantages = dynamic(() => import("@/components/organisms/advantages/Advantages"));
const CompanyPostList = dynamic(() => import("@/components/organisms/company-post-list"));

const AboutPage = () => {
    const t = useTranslations("AboutPage");

    const slug = useSlug();
    const { data } = useGetStaticPageBySlugQuery(slug);
    const { data: promotion_types } = useGetPromotionTypesQuery();
    const { data: companyAchievements } = useGetCompanyAchievementsQuery()
    const { business_types } = useAppData();

    const names = {
        title: t("banner.title"),
        btn: t("banner.btn"),
        road: t("banner.road"),
    };

    return (
        <>
            {data && (
                <PageTitleLayout
                    bg_image={data.image}
                    title={data.title}
                    button_text={names.btn}
                    breadcrumb={[
                        { text: "Главная", href: "/home" },
                        { text: names.road, href: "/about" },
                    ]}
                />
            )}
            <InfoCard
                title={t("BusinessResults.title")}
                sub_title={""}
                description={t("BusinessResults.description")}
                image={"/images/about_page/our_philosophy.webp"}
                card_title={t("BusinessResults.subtitle")}
                card_description={t("BusinessResults.subdesk")}
                card_icon={
                    <OurPhilosophyIcon className="w-[80px] h-[80px] sm:w-[118px] sm:h-[118px]" />
                }
            />
            {companyAchievements && <Advantages data={companyAchievements} />}
            <CompanyTeam />
            <CompanyPostList />
            <CompanyPartners />
            <PartnerReviewList />
            <FormLayout
                title={"Рассчитайте стоимость услуги"}
                nestedForm={
                    <CostCalculationForm
                        business_types={business_types}
                        promotion_types={promotion_types || []}
                    />
                }
            />
        </>
    );
};

export default AboutPage;
