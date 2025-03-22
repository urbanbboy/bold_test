import { Award } from "@/components/organisms/award";
import { FeedbackForm } from "@/components/forms/feedback-form";
import { FormLayout } from "@/components/templates/form-layout";
import NewsBanner from '@/components/atoms/NewsBanne/NewsBanne';
import { getTranslations } from "next-intl/server";
import dynamic from "next/dynamic";
import { getBanners } from "@/api/Banners";
import { Suspense } from "react";
import { Spinner } from "@/components/atoms/spinner";
import { getMarketingDepartment } from "@/api/Marketing";
import SingleSliderList from "@/components/organisms/single-slider-list";
import {
    getCompanyAchievements,
    getCompanyChallenges,
    getCompanyServices
} from "@/api/Company";


const FloatingWhatsapp = dynamic(() => import("@/components/atoms/floating-whatsapp"));
const MarketingDepartment = dynamic(() => import("@/components/organisms/marketing-department"));
const VideoAboutCompany = dynamic(() => import("@/components/organisms/video-about-company"));
const Advantages = dynamic(() => import("@/components/organisms/advantages/Advantages"));
const CompanyChallengeList = dynamic(() => import("@/components/organisms/company-challenge-list"));
const CompanyFeatures = dynamic(() => import("@/components/organisms/company-features"));
const CompanyPostList = dynamic(() => import("@/components/organisms/company-post-list"));
const BlogPostList = dynamic(() => import("@/components/organisms/blog-post-list"));
const CompanyPartners = dynamic(() => import("@/components/organisms/company-partners"));
const PartnerReviewList = dynamic(() => import("@/components/organisms/partner-review-list"));
const ClientReviewList = dynamic(() => import("@/components/organisms/client-review-list"));

const HomePage = async () => {
    const tPromise = getTranslations("HomePage");
    const banners = await getBanners();
    const marketingDepartmentDataPromise = getMarketingDepartment();
    const companyAchievementsPromise = getCompanyAchievements();
    const companyChallengesPromise = getCompanyChallenges();
    const companyServicesPromise = getCompanyServices();

    const [
        t,
        marketingDepartmentData,
        companyAchievements,
        companyChallenges,
        companyServices
    ] = await Promise.all([
        tPromise,
        marketingDepartmentDataPromise,
        companyAchievementsPromise,
        companyChallengesPromise,
        companyServicesPromise
    ]);
    return (
        <>
            <SingleSliderList banners={banners} />
            <Suspense fallback={<div className="w-full h-screen"><Spinner /></div>}>
                <FloatingWhatsapp />
                <NewsBanner />
                <MarketingDepartment data={marketingDepartmentData} />
                <VideoAboutCompany />
                <Advantages data={companyAchievements} />
                <CompanyChallengeList data={companyChallenges} />
                <CompanyFeatures data={companyServices} />
                <CompanyPostList />
                <BlogPostList />
                <Award
                    badgeTitle={t("section2.btn")}
                    title={t("section2.title")}
                    sub_title={t("section2.description")}
                    image={"/images/main_page/diploma.jpg"}
                />
                <CompanyPartners />
                <PartnerReviewList />
                <ClientReviewList />
                <FormLayout
                    title={"Получите бесплатную консультацию"}
                    nestedForm={<FeedbackForm />}
                />
            </Suspense>
        </>
    );
};

export default HomePage;