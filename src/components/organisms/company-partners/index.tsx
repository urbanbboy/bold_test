import { useGetCompanyPartnersQuery } from "@/api/Company"
import { Heading } from "@/components/atoms/heading"
import { RequestHandler } from "@/components/atoms/request-handler"
import { CompanyPartnerItem } from "@/components/molecules/company-partner-item"

export const CompanyPartners = () => {
    const { data, isLoading, error } = useGetCompanyPartnersQuery()

    return (
        <RequestHandler
            isLoading={isLoading}
            error={error}
            data={data}
        >
            <Heading as="h4" className="text-center font-normal uppercase md:text-xl text-gray2 mt-20">{data?.title}</Heading>
            <div className="relative flex overflow-hidden group mb-14 lg:mb-28">
                <div className="relative w-full overflow-hidden">
                    <div className="flex whitespace-nowrap animate-loop-scroll">
                        {[...(data?.items || []), ...(data?.items || [])].map((partner, idx) => (
                            <CompanyPartnerItem
                                key={idx}
                                company_name={partner.company_name}
                                company_logo={partner.company_logo}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </RequestHandler>


    )
}
