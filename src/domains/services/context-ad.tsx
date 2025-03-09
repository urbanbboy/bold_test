"use client";

import { useGetStaticPageBySlugQuery } from "@/api/StaticPages";
import { ServiceBrandingIcon1 } from "@/assets/services/branding";
import {
    ContextAd2Icon,
    ContextAd3Icon,
    ContextAd4Icon,
    ContextAd5Icon,
    ContextAd6Icon,
    ContextAdCard1Icon,
    ContextAdCard2Icon,
    ContextAdCard3Icon,
} from "@/assets/services/context-ad";
import { RequestHandler } from "@/components/atoms/request-handler";
import { FeedbackForm } from "@/components/forms/feedback-form";
import { CompanyPostList } from "@/components/organisms/company-post-list";
import { CompanyServiceCardList } from "@/components/organisms/company-service-card-list";
import { ServiceStaticCardList } from "@/components/organisms/service-static-card-list";
import { FormLayout } from "@/components/templates/form-layout";
import { PageTitleLayout } from "@/components/templates/page-title-layout";
import { Banner, ISmmCreatingAdData, ISmmTeamMembers } from "@/consts/types";
import useScrollToFeedback from "@/hooks/useScrollToFeedback";
import { useSlug } from "@/hooks/useSlug";
import { useTranslations } from "next-intl";

const ContextAdsPage = () => {
    const slug = useSlug();
    const { data, isLoading, error } = useGetStaticPageBySlugQuery(slug);
    const { ref, scrollToFeedback } = useScrollToFeedback();
    const t = useTranslations("ServicesPage2");
    const t2 = useTranslations("Buttons");

    const contextAdData: ISmmCreatingAdData = {
        title: t("whyContext.title"),
        items: [
            {
                image: "/images/services/context-ad/card_1.webp",
                icon: <ContextAdCard1Icon />,
                title: t("whyContext.subtitle1"),
                description: t("whyContext.subdesk1"),
            },
            {
                image: "/images/services/context-ad/card_2.webp",
                icon: <ContextAdCard2Icon />,
                title: t("whyContext.subtitle2"),
                description: t("whyContext.subdesk2"),
            },
            {
                image: "/images/services/context-ad/card_3.webp",
                icon: <ContextAdCard3Icon />,
                title: t("whyContext.subtitle3"),
                description: t("whyContext.subdesk3"),
            },
        ],
    };

    const contextAdCardData: ISmmTeamMembers = {
        title: t("howWeWork.title"),
        items: [
            {
                image: <ServiceBrandingIcon1 />,
                number: "01",
                title: t("howWeWork.subdesk1"),
                isContextAd: true,
            },
            {
                image: <ContextAd2Icon />,
                number: "02",
                title: t("howWeWork.subdesk2"),
                isContextAd: true,
            },
            {
                image: <ContextAd3Icon />,
                number: "03",
                title: t("howWeWork.subdesk3"),
                isContextAd: true,
            },
            {
                image: <ContextAd4Icon />,
                number: "04",
                title: t("howWeWork.subdesk4"),
                isContextAd: true,
            },
            {
                image: <ContextAd5Icon />,
                number: "05",
                title: t("howWeWork.subdesk5"),
                isContextAd: true,
            },
            {
                image: <ContextAd6Icon />,
                number: "06",
                title: t("howWeWork.subdesk6"),
                isContextAd: true,
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
                    isGray={true}
                    button_text={banner.button_text}
                    breadcrumb={[
                        { text: "Главная", href: "/home" },
                        { text: "Контекстная реклама", href: "/services/context-ads" },
                    ]}
                />
            )}
            <ServiceStaticCardList
                title={contextAdData.title}
                items={contextAdData.items}
            />
            <CompanyServiceCardList
                title={contextAdCardData.title}
                items={contextAdCardData.items}
                btn={t2("btn1")}
            />
            <CompanyPostList />
            <FormLayout ref={ref} nestedForm={<FeedbackForm />} />
        </RequestHandler>
    );
};

export default ContextAdsPage;
