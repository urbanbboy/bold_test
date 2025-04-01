"use client";

import { useGetCompanyPartnersQuery } from "@/api/Company";
import { Heading } from "@/components/atoms/heading";
import { RequestHandler } from "@/components/atoms/request-handler";
import { Spinner } from "@/components/atoms/spinner";
import { CompanyPartnerItem } from "@/components/molecules/company-partner-item";
import Marquee from "react-fast-marquee";

const CompanyPartners = () => {
    const { data, isLoading, error } = useGetCompanyPartnersQuery();

    if (isLoading) return <Spinner />;


    return (
        <RequestHandler isLoading={isLoading} error={error} data={data}>
            <Heading
                as="h4"
                className="text-center font-normal uppercase md:text-xl text-gray2 mt-20"
            >
                {data?.title}
            </Heading>
            <div className="relative flex overflow-hidden group mb-14 lg:mb-28">
                <Marquee gradient>
                    {[...(data?.items || []), ...(data?.items || [])].map(
                        (partner, idx) => (
                            <CompanyPartnerItem
                                key={idx}
                                company_name={partner.company_name}
                                company_logo={partner.company_logo}
                            />
                        )
                    )}
                </Marquee>
            </div>
        </RequestHandler>
    );
};

export default CompanyPartners;