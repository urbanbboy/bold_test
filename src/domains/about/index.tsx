import { CostCalculationForm } from "@/components/forms/cost-calculation-form";
import CompanyPartners from "@/components/organisms/company-partners";
import CompanyPostList from "@/components/organisms/company-post-list";
import { CompanyTeam } from "@/components/organisms/company-team";
import { InfoCard } from "@/components/organisms/info-card";
import PartnerReviewList from "@/components/organisms/partner-review-list";
import FormLayout from "@/components/templates/form-layout";
import { PageTitleLayout } from "@/components/templates/page-title-layout";
import { OurPhilosophyIcon } from "@/assets/info-card";
import { getStaticPageBySlug } from "@/api/StaticPages";
import { getPromotionTypes } from "@/api/Types";
import Advantages from "@/components/organisms/advantages/Advantages";
import { getTranslations } from "next-intl/server";
import { getCompanyPartners, getCompanyPosts } from "@/api/Company";
import { getPartnersReviews } from "@/api/PartnerReviews";

const AboutPage = async () => {
    const t = await getTranslations("AboutPage");
    const data = await getStaticPageBySlug('about');
    const [partners, reviews, promotion_types] =
        await Promise.all([
            getCompanyPartners(),
            getPartnersReviews(),
            getPromotionTypes()
        ]);

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
            <Advantages />
            <CompanyTeam />
            <CompanyPostList />
            <CompanyPartners data={partners} />
            <PartnerReviewList data={reviews} />
            <FormLayout
                title={"Рассчитайте стоимость услуги"}
                nestedForm={
                    <CostCalculationForm
                        promotion_types={promotion_types || []}
                    />
                }
            />
        </>
    );
};

export default AboutPage;
