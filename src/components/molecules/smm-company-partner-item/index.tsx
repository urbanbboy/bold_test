import Image from "next/image";
import { FC } from "react"

interface CompanyPartnerItemProps {
    company_name: string;
    company_logo: string;
}

export const SmmCompanyPartnerItem: FC<CompanyPartnerItemProps> = ({ company_name, company_logo }) => {
    return (
        <Image
            src={company_logo}
            alt={company_name}
            width={300}
            height={300}
            className="rounded-2xl"
        />
    )
}
