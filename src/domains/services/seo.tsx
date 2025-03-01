'use client';

import { useGetStaticPageBySlugQuery } from "@/api/StaticPages";
import { RequestHandler } from "@/components/atoms/request-handler";
import { SeoFeedbackForm } from "@/components/forms/seo-feedback-form";
import { CompanyServiceCardList } from "@/components/organisms/company-service-card-list";
import { Faq } from "@/components/organisms/faq";
import { ServicePostList } from "@/components/organisms/service-post-list";
import { ServiceStaticCardList } from "@/components/organisms/service-static-card-list";
import { FormLayout } from "@/components/templates/form-layout";
import { PageTitleLayout } from "@/components/templates/page-title-layout";
import { seoData, seoPostsData, seoCardsData } from "@/consts/data";
import { useSlug } from "@/hooks/useSlug";

const SeoPage = () => {
    const slug = useSlug()
    const { data, isLoading, error } = useGetStaticPageBySlugQuery(slug)


    return (
        <RequestHandler
            isLoading={isLoading}
            error={error}
            data={data}
        >
            {data &&
                <PageTitleLayout
                    title={data.title}
                    sub_title={data.content}
                    bg_image={data.image}
                    button_text={"Получить консультацию"}
                    breadcrumb={[
                        { text: 'Главная', href: '/home' },
                        { text: 'SEO-оптимизация', href: '/services/seo' },
                    ]}
                    isGray
                />
            }
            <ServiceStaticCardList
                title={seoData.title}
                items={seoData.items}
            />
            <ServicePostList
                title={seoPostsData.title}
                items={seoPostsData.items}
            />
            <CompanyServiceCardList
                title={seoCardsData.title}
                items={seoCardsData.items}
            />
            <Faq />
            <FormLayout
                title="Узнайте стоимость SEO-оптимизации "
                nestedForm={
                    <SeoFeedbackForm
                        business_types={[]}
                        promotion_types={[]}
                    />
                }
            />
        </RequestHandler>
    );
}

export default SeoPage