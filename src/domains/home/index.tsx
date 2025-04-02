import dynamic from "next/dynamic";
import { getTranslations } from "next-intl/server";
import { getBanners } from "@/api/Banners";
import SingleSliderList from "@/components/organisms/single-slider-list";
import { getMarketingDepartment } from "@/api/Marketing";
import { getCompanyChallenges, getCompanyPartners, getCompanyPosts } from "@/api/Company";
import MarketingDepartment from "@/components/organisms/marketing-department";
import Advantages from "@/components/organisms/advantages/Advantages";
import CompanyChallengeList from "@/components/organisms/company-challenge-list";
import CompanyFeatures from "@/components/organisms/company-features";
import CompanyPostList from "@/components/organisms/company-post-list";
import { getArticles } from "@/api/Article";
import BlogPostList from "@/components/organisms/blog-post-list";
import CompanyPartners from "@/components/organisms/company-partners";
import { getPartnersReviews } from "@/api/PartnerReviews";
import PartnerReviewList from "@/components/organisms/partner-review-list";
import ClientReviewList from "@/components/organisms/client-review-list";

const NewsBanner = dynamic(() => import("@/components/atoms/NewsBanner/NewsBanner"));
const VideoAboutCompany = dynamic(() => import("@/components/organisms/video-about-company"));
const Award = dynamic(() => import("@/components/organisms/award"));
const FormLayout = dynamic(() => import("@/components/templates/form-layout"));
const FeedbackForm = dynamic(() => import("@/components/forms/feedback-form"));

const HomePage = async () => {
    const t = await getTranslations("HomePage.section2");
    const banners = await getBanners();
    const [marketingDepartmentData, companyChallenges, articles, partners, reviews] = 
    await Promise.all([
        getMarketingDepartment(),
        getCompanyChallenges(),
        getArticles(),
        getCompanyPartners(),
        getPartnersReviews()
    ]);

    return (
        <>
            <NewsBanner banners={banners} />
            <SingleSliderList banners={banners} />
            <MarketingDepartment data={marketingDepartmentData} />
            <VideoAboutCompany/>
            <Advantages />
            <CompanyChallengeList data={companyChallenges} />
            <CompanyFeatures />
            <CompanyPostList />
            <BlogPostList data={articles} />
            <Award
                badgeTitle={t("btn")}
                title={t("title")}
                sub_title={t("description")}
                image={"/images/main_page/diploma.jpg"}
            />
            <CompanyPartners data={partners} />
            <PartnerReviewList data={reviews} />
            <ClientReviewList />
            <FormLayout
                title={"Получите бесплатную консультацию"}
                nestedForm={<FeedbackForm />}
            />
        </>
    );
};

export default HomePage;