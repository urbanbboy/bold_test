import { CompanyInfo } from "@/components/organisms/company-info";
import { MarketingDepartment } from "@/components/organisms/marketing-department";
import { SingleSliderList } from "@/components/organisms/single-slider-list";


const HomePage = () => {
    return (
        <div className="">
            <SingleSliderList />
            <MarketingDepartment />
            <CompanyInfo />
        </div>
    );
}

export default HomePage;