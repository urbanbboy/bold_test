'use client';

import { Award } from "@/components/organisms/award";
import { Checkup } from "@/components/organisms/checkup";
import { CompanyChallengeList } from "@/components/organisms/company-challenge-list";
import { CompanyFeatures } from "@/components/organisms/company-features";
import { CompanyInfo } from "@/components/organisms/company-info";
import { CompanyPartners } from "@/components/organisms/company-partners";
import { CompanyPostList } from "@/components/organisms/company-post-list";
import { MarketingDepartment } from "@/components/organisms/marketing-department";
import { PartnerReviewList } from "@/components/organisms/partner-review-list";
import { SingleSliderList } from "@/components/organisms/single-slider-list";
import { VideoAboutCompany } from "@/components/organisms/video-about-company";
import { FeedbackForm } from "@/components/forms/feedback-form";
import { FormLayout } from "@/components/templates/form-layout";
import { useRef } from "react";


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
            <Award />
            <CompanyPartners />
            <PartnerReviewList />
            <FormLayout
                ref={feedbackRef}
                title={'Получите бесплатную консультацию'}
                sub_title={"Оставьте контакты для связи, и мы перезвоним вам"}
                nestedForm={<FeedbackForm />}
            />
        </>
    );
}

export default HomePage;