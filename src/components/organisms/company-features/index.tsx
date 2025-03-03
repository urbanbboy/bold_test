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
import { motion } from "framer-motion"
import { fadeIn, staggerTransition, textVariant, viewportConfig } from "@/lib/motion"
import { CompanyServicesResponse } from "@/api/Company/types"

// --------------------------------
// Сделать кнопки кликабельными подробнее
// --------------------------------

const hrefMap: Record<string, string> = {
    "брендинг": "/services/branding",
    "digital-продвижение": "/services/smm",
    "видеопродакшн": "/services/video-production",
    "веб-разработка-и-дизайн": "/services/site-creating",
    "комплексное-маркетинговое-сопровождение": "/services/marketing-support",
    "автоматизация-и-аналитика": "/services/crm"
};

export const CompanyFeatures = () => {
    const { data, isLoading, error } = useGetCompanyServicesQuery()

    const normalizeTitle = (title: string) => title.toLowerCase().trim().replace(/\s+/g, '-');

    const updatedFeatures = data?.items.map((feature) => {
        const normalizedTitle = normalizeTitle(feature.title);
        return {
            ...feature,
            href: hrefMap[normalizedTitle] || "/services/default",
        };
    });

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
                    {updatedFeatures?.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeIn('up', 'spring', idx * 0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={viewportConfig}
                            transition={staggerTransition(idx)}
                        >
                            <CompanyFeatureItem
                                {...feature}
                            />
                        </motion.div>

                    ))}
                </div>
            </RequestHandler>

        </section>
    )
}
