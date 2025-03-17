"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Award } from "@/components/organisms/award";
import { Checkup } from "@/components/organisms/checkup";
import { CompanyChallengeList } from "@/components/organisms/company-challenge-list";
import { CompanyFeatures } from "@/components/organisms/company-features";
import { CompanyPartners } from "@/components/organisms/company-partners";
import { CompanyPostList } from "@/components/organisms/company-post-list";
import { MarketingDepartment } from "@/components/organisms/marketing-department";
import { SingleSliderList } from "@/components/organisms/single-slider-list";
import { FeedbackForm } from "@/components/forms/feedback-form";
import { FormLayout } from "@/components/templates/form-layout";
import { PartnerReviewList } from "@/components/organisms/partner-review-list";
import { useTranslations } from "next-intl";
import { Advantages } from "@/components/organisms/advantages/Advantages";
import NewsBanner from '@/components/atoms/NewsBanne/NewsBanne';
import { VideoAboutCompany } from "@/components/organisms/video-about-company";
import { useGetCompanyVideoReviewsQuery } from "@/api/Company";
import { ClientReviewList } from "@/components/organisms/client-review-list";

const HomePage = () => {
    const t = useTranslations("HomePage");
    const { data: reviews } = useGetCompanyVideoReviewsQuery();

    return (
        <>
            <NewsBanner/>
            <SingleSliderList />
            <FloatingWhatsApp
                phoneNumber="+996999504444" // Номер телефона в международном формате
                accountName="Bold Brands International"
                notificationSound
                chatMessage="Доброго времени суток, чем могу вам помочь?"
                statusMessage="Онлайн"
                darkMode
                avatar="/bold_logo.svg"
                placeholder="Введите текст"
            />
            <MarketingDepartment />
            <VideoAboutCompany />
            <Advantages />
            <CompanyChallengeList />
            <CompanyFeatures />
            {/* <Checkup /> */}
            <CompanyPostList />
            <Award
                badgeTitle={t("section2.btn")}
                title={t("section2.title")}
                sub_title={t("section2.description")}
                image={"/images/main_page/diploma.jpg"}
            />
            <CompanyPartners />
            <PartnerReviewList />
            {reviews &&
                            <ClientReviewList
                                title={reviews[1].title}
                                sub_title={reviews[1].sub_title}
                                reviews={reviews[1].items}
                            />
            }
            <FormLayout
                title={"Получите бесплатную консультацию"}
                nestedForm={<FeedbackForm />}
            />
        </>
    );
};

export default HomePage;