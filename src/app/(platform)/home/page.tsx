import { Checkup } from "@/components/organisms/checkup";
import { CompanyChallengeList } from "@/components/organisms/company-challenge-list";
import { CompanyFeatures } from "@/components/organisms/company-features";
import { CompanyInfo } from "@/components/organisms/company-info";
import { MarketingDepartment } from "@/components/organisms/marketing-department";
import { SingleSliderList } from "@/components/organisms/single-slider-list";


const HomePage = () => {
    return (
        <div className="">
            <SingleSliderList />
            <MarketingDepartment />
            <CompanyInfo />
            <CompanyChallengeList />
            <CompanyFeatures />
            <Checkup />
        </div>
    );
}

export default HomePage;