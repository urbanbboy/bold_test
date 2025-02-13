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
import { FeedbackForm } from "@/components/templates/feedback-layout";


const HomePage = () => {
    return (
        <div className="">
            <SingleSliderList />
            <MarketingDepartment />
            <CompanyInfo />
            <CompanyChallengeList />
            <CompanyFeatures />
            <Checkup />
            <CompanyPostList />
            <Award />
            <CompanyPartners />
            <PartnerReviewList />
            <FeedbackForm />
        </div>
    );
}

export default HomePage;