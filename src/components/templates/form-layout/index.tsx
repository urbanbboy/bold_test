import { FeedbackContactItem } from "@/components/atoms/feedback-contact-item";
import { Heading } from "@/components/atoms/heading";
import { Mail, Phone } from "lucide-react"
import Image from "next/image";
import { forwardRef } from "react";

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

interface FormProps {
    title?: string;
    nestedForm: React.ReactNode;
}

export const FormLayout = forwardRef<HTMLDivElement, FormProps>(({
    title = 'Рассчитайте стоимость услуги',
    nestedForm
}, ref) => {
    return (
        <div
            ref={ref}
            className="relative w-full max-w-[1920px] min-h-screen bg-background-dark flex justify-center items-center"
        >
            {/* Фоновое изображение */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[800px]">
                <Image
                    src={"/images/form_bg.png"}
                    alt="form_bg"
                    // fill
                    width={800}
                    height={600}
                />
            </div>

            {/* Контент */}
            <div className="relative z-10 m-auto max-w-[1280px] flex flex-col lg:flex-row items-center gap-3 py-10 lg:py-0 justify-center px-4 text-white">
                <div className="flex flex-col gap-y-3 md:gap-y-8 lg:w-1/2">
                    <Heading as="h2" className="text-primary-foreground">{title}</Heading>
                    <h3 className="text-gray text-xl">Оставьте контакты для связи, и мы перезвоним вам</h3>
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
                    {nestedForm}
                </div>
            </div>
        </div>
    );
});

FormLayout.displayName = "FormLayout";
