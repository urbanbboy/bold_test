import { SmmCompanyPartnerItem } from "@/components/molecules/smm-company-partner-item";

interface SMMPartnersCarouselProps {
    title: string;
    sub_title: string;
    partnerList: { id: string, image: string }[];
}

export const SMMPartnersCarousel = ({
    title,
    sub_title,
    partnerList
}: SMMPartnersCarouselProps) => {
    return (
        <div className="w-full max-w-[1920px] p-4">
            <div className="relative flex flex-col justify-center items-center gap-y-7 bg-black rounded-xl px-7 py-9 md:py-24 text-center overflow-hidden">
                <h1 className="text-primary-foreground text-2xl md:text-5xl font-bold">{title}</h1>
                <p className="text-sm md:text-base text-muted-foreground max-w-sm">{sub_title}</p>
                <div className="flex overflow-hidden group mb-14">
                    <div className="w-screen overflow-hidden mt-5">
                        <div className="flex gap-x-5 whitespace-nowrap animate-loop-scroll">
                            {[...partnerList, ...partnerList, ...partnerList].map((partner, idx) => (
                                <SmmCompanyPartnerItem
                                    key={idx}
                                    company_name={partner.id}
                                    company_logo={partner.image}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
