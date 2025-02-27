import { CompanyFeatureItem } from "@/components/molecules/company-feautre-item"
import Feature1SVG from '@/assets/features/feature_1.svg'
import Feature2SVG from '@/assets/features/feature_2.svg'
import Feature3SVG from '@/assets/features/feature_3.svg'
import Feature4SVG from '@/assets/features/feature_4.svg'
import Feature5SVG from '@/assets/features/feature_5.svg'
import Feature6SVG from '@/assets/features/feature_6.svg'
import FeaturesBgSVG from '@/assets/backgrounds/features_bg.svg'
import { Heading } from "@/components/atoms/heading"
import { useGetCompanyServicesQuery } from "@/api/Company"
import { RequestHandler } from "@/components/atoms/request-handler"




export interface FeatureProps {
    title: string;
    badges: string[];
    href: string;
    bg_image: React.ReactNode;
}

const features: FeatureProps[] = [
    {
        title: "Брендинг",
        badges: ["Брендинг и айдентика", "Нейминг", "Дизайн поддержка"],
        href: '/servies/branding',
        bg_image: <Feature1SVG />
    },
    {
        title: "Digital продвижение",
        badges: ["SMM", "Инфлюенс-маркетинг", "Контекстная реклама"],
        href: '/servies/branding',
        bg_image: <Feature2SVG />
    },
    {
        title: "Видеопродакшн",
        badges: ["Моушн-видео", "Аэросъемка", "Видеопроизводство"],
        href: '/servies/branding',
        bg_image: <Feature3SVG />
    },
    {
        title: "Веб-разработка и дизайн",
        badges: ["Разработка сайтов", "UX/UI дизайн", "Техническая поддержка"],
        href: '/servies/branding',
        bg_image: <Feature4SVG />
    },
    {
        title: "Комплексное маркетинговое сопровождение",
        badges: ["Сео-продвижение сайтов", "Контекстная и таргетированная реклама"],
        href: '/servies/branding',
        bg_image: <Feature5SVG />
    },
    {
        title: "Автоматизация и аналитика",
        badges: ["Внедрение CRM-систем", "Разработка и запуск воронок продаж"],
        href: '/servies/branding',
        bg_image: <Feature6SVG />
    },
]

export const CompanyFeatures = () => {
    const { data, isLoading, error } = useGetCompanyServicesQuery()


    return (
        <section className="w-full max-w-[1920px] m-auto px-4 sm:px-20 md:px-40 pb-20">
            <RequestHandler
                isLoading={isLoading}
                error={error}
                data={data}
            >
                <div className="relative flex justify-center items-center py-10 md:py-16 px-4 text-center overflow-hidden">
                    <FeaturesBgSVG className="absolute -z-10 max-w-[1920px] m-auto" />
                    <Heading as="h2">
                        {data?.title}
                    </Heading>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {data?.items.map((feature) => (
                        <CompanyFeatureItem
                            key={feature.title}
                            {...feature}
                        />
                    ))}
                </div>
            </RequestHandler>

        </section>
    )
}
