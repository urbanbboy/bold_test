'use client';

import { useRef } from "react";
import { Award } from "@/components/organisms/award";
import { Checkup } from "@/components/organisms/checkup";
import { CompanyChallengeList } from "@/components/organisms/company-challenge-list";
import { CompanyFeatures } from "@/components/organisms/company-features";
import { CompanyInfo } from "@/components/organisms/company-info";
import { CompanyPartners } from "@/components/organisms/company-partners";
import { CompanyPostList } from "@/components/organisms/company-post-list";
import { MarketingDepartment } from "@/components/organisms/marketing-department";
import { SingleSliderList } from "@/components/organisms/single-slider-list";
import { VideoAboutCompany } from "@/components/organisms/video-about-company";
import { FeedbackForm } from "@/components/forms/feedback-form";
import { FormLayout } from "@/components/templates/form-layout";

const HomePage = () => {
    const feedbackRef = useRef<HTMLDivElement>(null);

    const scrollToFeedback = () => {
        feedbackRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <>
            <SingleSliderList onScrollToFeedback={scrollToFeedback} />
            <MarketingDepartment />
            <VideoAboutCompany />
            <CompanyInfo />
            <CompanyChallengeList />
            <CompanyFeatures />
            <Checkup onScrollToFeedback={scrollToFeedback} />
            <CompanyPostList />
            <Award
                badgeTitle={"Получили премию"}
                title={"Маркетинговая компания года"}
                sub_title="на The Great Award of the Year 2023!"
                image={"/images/main_page/diploma.jpg"}
            />
            <CompanyPartners />
            <FormLayout
                ref={feedbackRef}
                title={'Получите бесплатную консультацию'}
                nestedForm={<FeedbackForm />}
            />
        </>
    );
}

export default HomePage;