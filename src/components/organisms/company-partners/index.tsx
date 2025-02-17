import { Heading } from "@/components/atoms/heading"
import { CompanyPartnerItem } from "@/components/molecules/company-partner-item"

const data = {
    title: 'Наши партнеры',
    items: [
        {
            company_name: 'Алькони',
            company_logo: '/images/main_page/partners/partner_1.svg'
        },
        {
            company_name: 'Алькони',
            company_logo: '/images/main_page/partners/partner_2.svg'
        },
        {
            company_name: 'Алькони',
            company_logo: '/images/main_page/partners/partner_3.svg'
        },
        {
            company_name: 'Алькони',
            company_logo: '/images/main_page/partners/partner_4.svg'
        },
        {
            company_name: 'Алькони',
            company_logo: '/images/main_page/partners/partner_5.svg'
        },
        {
            company_name: 'Алькони',
            company_logo: '/images/main_page/partners/partner_6.svg'
        },
        {
            company_name: 'Алькони',
            company_logo: '/images/main_page/partners/partner_7.svg'
        }
    ]
}

export const CompanyPartners = () => {

    return (
        <>
            <Heading as="h4" className="text-center font-normal uppercase md:text-xl">{data.title}</Heading>
            <div className="relative flex overflow-hidden group mb-14 lg:mb-28">
                <div className="relative w-full overflow-hidden">
                    <div className="flex whitespace-nowrap animate-loop-scroll">
                        {[...data.items, ...data.items].map((partner, idx) => (
                            <CompanyPartnerItem
                                key={idx}
                                company_name={partner.company_name}
                                company_logo={partner.company_logo}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>


    )
}
