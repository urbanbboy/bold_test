import { FeedbackContactItem } from "@/components/atoms/feedback-contact-item";
import { Mail, Phone } from "lucide-react"
import { forwardRef } from "react";
import { CostCalculationForm } from "@/components/forms/cost-calculation-form";

interface ContactItem {
    icon?: React.ReactNode;
    title: string;
    contact: string;
    href?: string;
}

const data: ContactItem[] = [
    {
        icon: <Phone />,
        title: "Телефон (Бишкек)",
        contact: '+996 999 50 44 44',
        href: 'tel:+996 999 50 44 44'
    },
    {
        title: "Телефон (Ташкент)",
        contact: '+998 909 36 09 36',
        href: 'tel:+998 909 36 09 36'
    },
    {
        icon: <Mail />,
        title: "Электронная почта",
        contact: 'info@boldbrands.kg',
        href: 'mailto:info@boldbrands.kg',
    },
]

export const CostCalculationLayout = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <div 
            ref={ref}
            className="w-full max-w-[1920px] min-h-screen bg-black flex justify-center items-center"
        >
            <div className="m-auto max-w-[1280px] flex flex-col lg:flex-row items-center gap-4 py-10 lg:py-0 justify-center px-4 text-white">
                <div className="flex flex-col gap-y-3 md:gap-y-8 lg:w-1/2">
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl">Рассчитайте стоимость услуги</h1>
                    <h3 className="text-gray text-xl">Получите решение для вашего бизнеса!</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                        {data.map((contact, idx) => (
                            <FeedbackContactItem
                                key={contact.title}
                                {...contact}
                                idx={idx}
                                lastIdx={data.length - 1}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex-1 w-full lg:w-1/2 max-w-[600px]">
                    <CostCalculationForm />
                </div>
            </div>
        </div>
    );
});

CostCalculationLayout.displayName = "FeedbackForm";
