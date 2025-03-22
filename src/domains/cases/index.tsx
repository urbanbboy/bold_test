"use client";

import { useGetPostsQuery } from "@/api/Post";
import { useGetStaticPageBySlugQuery } from "@/api/StaticPages";
import { PageLoader } from "@/components/atoms/page-loader";
import { FeedbackForm } from "@/components/forms/feedback-form";
import { CasesList } from "@/components/organisms/cases-list";
import { FormLayout } from "@/components/templates/form-layout";
import { PageTitleLayout } from "@/components/templates/page-title-layout";
import { useSlug } from "@/hooks/useSlug";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const CompanyPartners = dynamic(() => import("@/components/organisms/company-partners"));
const PartnerReviewList = dynamic(() => import("@/components/organisms/partner-review-list"));
const ClientReviewList = dynamic(() => import("@/components/organisms/client-review-list"));


const CasesPage = () => {
    const slug = useSlug();
    const { data, isLoading, error } = useGetStaticPageBySlugQuery(slug);
    const { data: post_data } = useGetPostsQuery();
    const t = useTranslations("Cases");

    type BannerTexts = {
        title: string;
        btn: string;
        road: string;
    };

    const texts: BannerTexts = {
        title: t("banner.title"),
        btn: t("banner.btn"),
        road: t("banner.road"),
    };

    return (
        <>
            {data && (
                <PageTitleLayout
                    bg_image={data.image}
                    title={texts.title}
                    button_text={texts.btn}
                    breadcrumb={[
                        { text: "Главная", href: "/home" },
                        { text: texts.road, href: "/cases" },
                    ]}
                />
            )}
            <Suspense fallback={<PageLoader />}>
                <CasesList posts={post_data?.results || []} />
                <ClientReviewList hasBg />
                <CompanyPartners />
                <PartnerReviewList />
                <FormLayout nestedForm={<FeedbackForm />} />
            </Suspense>
        </>
    );
};

export default CasesPage;
