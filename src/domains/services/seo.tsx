"use client";

import { useGetStaticPageBySlugQuery } from "@/api/StaticPages";
import { useGetSiteStatusQuery } from "@/api/Types";
import { ServiceBrandingIcon1 } from "@/assets/services/branding";
import {
    Card1Icon,
    Card2Icon,
    Card3Icon,
    SeoHowWeWork2,
    SeoHowWeWork3,
    SeoHowWeWork4,
    SeoHowWeWork5,
} from "@/assets/services/seo";
import { RequestHandler } from "@/components/atoms/request-handler";
import { SeoFeedbackForm } from "@/components/forms/seo-feedback-form";
import { CompanyServiceCardList } from "@/components/organisms/company-service-card-list";
import { Faq } from "@/components/organisms/faq";
import { ServicePostList } from "@/components/organisms/service-post-list";
import { ServiceStaticCardList } from "@/components/organisms/service-static-card-list";
import { FormLayout } from "@/components/templates/form-layout";
import { PageTitleLayout } from "@/components/templates/page-title-layout";
import { Banner, ISmmCreatingAdData, ISmmTeamMembers } from "@/consts/types";
import { useAppData } from "@/context/app-context";
import useScrollToFeedback from "@/hooks/useScrollToFeedback";
import { useSlug } from "@/hooks/useSlug";
import { useTranslations } from "next-intl";

const SeoPage = () => {
    const slug = useSlug();
    const { data, isLoading, error } = useGetStaticPageBySlugQuery(slug);
    const { data: site_statuses } = useGetSiteStatusQuery();
    const { business_types } = useAppData();
    const { ref, scrollToFeedback } = useScrollToFeedback();
    const t = useTranslations("ServicesPage3");
    const t2 = useTranslations("Buttons");

    const seoData: ISmmCreatingAdData = {
        title: t("whySEO.title"),
        items: [
            {
                image: "/images/services/seo/card_1.webp",
                icon: <Card1Icon />,
                title: t("whySEO.title1"),
                description: t("whySEO.content1"),
            },
            {
                image: "/images/services/seo/card_2.webp",
                icon: <Card2Icon />,
                title: t("whySEO.title2"),
                description: t("whySEO.content2"),
            },
            {
                image: "/images/services/seo/card_3.webp",
                icon: <Card3Icon />,
                title: t("whySEO.title3"),
                description: t("whySEO.content3"),
            },
        ],
    };

    const seoPostsData = {
        title: t("services.title"),
        items: [
            {
                image: "/images/services/seo/seo1-min.png",
                image_right: false,
                title: t("services.title1"),
                tags: [
                    { tags: t("services.tags1.tag1") },
                    { tags: t("services.tags1.tag2") },
                    { tags: t("services.tags1.tag3") },
                ],
            },
            {
                image: "/images/services/seo/seo2-min.png",
                image_right: true,
                title: t("services.title2"),
                tags: [
                    { tags: t("services.tags2.tag1") },
                    { tags: t("services.tags2.tag2") },
                    { tags: t("services.tags2.tag3") },
                ],
            },
            {
                image: "/images/services/seo/seo3-min.png",
                image_right: false,
                title: t("services.title3"),
                tags: [
                    { tags: t("services.tags3.tag1") },
                    { tags: t("services.tags3.tag2") },
                    { tags: t("services.tags3.tag3") },
                ],
            },
            {
                image: "/images/services/seo/seo4-min.png",
                image_right: true,
                title: t("services.title4"),
                tags: [
                    { tags: t("services.tags4.tag1") },
                    { tags: t("services.tags4.tag2") },
                    { tags: t("services.tags4.tag3") },
                ],
            },
            {
                image: "/images/services/seo/seo5-min.png",
                image_right: false,
                title: t("services.title5"),
                tags: [
                    { tags: t("services.tags5.tag1") },
                    { tags: t("services.tags5.tag2") },
                    { tags: t("services.tags5.tag3") },
                ],
            },
            {
                image: "/images/services/seo/seo6-min.png",
                image_right: true,
                title: t("services.title6"),
                tags: [
                    { tags: t("services.tags6.tag1") },
                    { tags: t("services.tags6.tag2") },
                    { tags: t("services.tags6.tag3") },
                ],
            },
        ],
    };

    const seoCardsData: ISmmTeamMembers = {
        title: t("howWeWork.title1"),
        items: [
            {
                image: <ServiceBrandingIcon1 />,
                number: "01",
                title: t("howWeWork.title11"),
                description: t("howWeWork.description11"),
            },
            {
                image: <SeoHowWeWork2 />,
                number: "02",
                title: t("howWeWork.title12"),
                description: t("howWeWork.description12"),
            },
            {
                image: <SeoHowWeWork3 />,
                number: "03",
                title: t("howWeWork.title13"),
                description: t("howWeWork.description13"),
            },
            {
                image: <SeoHowWeWork4 />,
                number: "04",
                title: t("howWeWork.title14"),
                description: t("howWeWork.description14"),
            },
            {
                image: <SeoHowWeWork5 />,
                number: "05",
                title: t("howWeWork.title15"),
                description: t("howWeWork.description15"),
            },
        ],
    };

    const banner: Banner = {
        title: t("banner.title"),
        sub_title: t("banner.description"),
        button_text: t("banner.btn"),
    };

    return (
        <RequestHandler isLoading={isLoading} error={error} data={data}>
            {data && (
                <PageTitleLayout
                    scrollToFeedback={scrollToFeedback}
                    title={banner.title}
                    sub_title={banner.sub_title}
                    bg_image={data.image}
                    button_text={banner.button_text}
                    breadcrumb={[
                        { text: "Главная", href: "/home" },
                        { text: "SEO-оптимизация", href: "/services/seo" },
                    ]}
                    isGray
                />
            )}
            <ServiceStaticCardList title={seoData.title} items={seoData.items} />
            <ServicePostList title={seoPostsData.title} items={seoPostsData.items} />
            <CompanyServiceCardList
                title={seoCardsData.title}
                items={seoCardsData.items}
                btn={t2("btn1")}
            />
            <Faq />
            <FormLayout
                ref={ref}
                title="Узнайте стоимость SEO-оптимизации "
                nestedForm={
                    <SeoFeedbackForm
                        business_types={business_types}
                        site_statuses={site_statuses || []}
                    />
                }
            />
        </RequestHandler>
    );
};

export default SeoPage;
