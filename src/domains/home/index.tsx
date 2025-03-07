'use client';

import { useGetStaticPageBySlugQuery } from "@/api/StaticPages";
import { useGetTaskTypesQuery } from "@/api/Types";
import { CrmIcon } from "@/assets/info-card";
import { RequestHandler } from "@/components/atoms/request-handler";
import { CrmFeedbackForm } from "@/components/forms/crm-feedback-form";
import { Award } from "@/components/organisms/award";
import { CompanyPostList } from "@/components/organisms/company-post-list";
import { CompanyServiceCardList } from "@/components/organisms/company-service-card-list";
import { InfoCard } from "@/components/organisms/info-card";
import { ServicePostList } from "@/components/organisms/service-post-list";
import { FormLayout } from "@/components/templates/form-layout";
import { PageTitleLayout } from "@/components/templates/page-title-layout";
import { serviceCrmData, serviceData } from "@/consts/data";
import { useAppData } from "@/context/app-context";
import useScrollToFeedback from "@/hooks/useScrollToFeedback";
import { useSlug } from "@/hooks/useSlug";
import { useTranslations } from "next-intl";


const CrmPage = () => {
    const slug = useSlug()
    const t = useTranslations("ServicesPage7")
    const { data, isLoading, error } = useGetStaticPageBySlugQuery(slug)
    const { data: task_types } = useGetTaskTypesQuery()
    const { business_types } = useAppData()
    const { ref, scrollToFeedback } = useScrollToFeedback()

    return (
        <RequestHandler
            isLoading={isLoading}
            error={error}
            data={data}
        >
            {data &&
                <PageTitleLayout
                    scrollToFeedback={scrollToFeedback}
                    title={data.title}
                    sub_title={data.content}
                    bg_image={data.image}
                    button_text={t("order_integration")}
                    breadcrumb={[
                        { text: t('home'), href: '/home' },
                        { text: t('crm_integration'), href: '/services/crm' },
                    ]}
                    isGray
                />
            }
            <CompanyServiceCardList
                title={t(serviceCrmData.title)}
                items={serviceCrmData.items.map(item => ({ ...item, title: t(item.title), description: t(item.description) }))}
            />
            <InfoCard
                title={t("our_crm_approach")}
                description={t("crm_approach_description")}
                card_title={t("we_train_your_team")}
                card_description={t("provide_support")}
                card_icon={<CrmIcon />}
                image={'/images/services/crm/info-crm.png'}
            />
            <Award
                badgeTitle={t("partnership")}
                title={t("bitrix24_partners")}
                image={"/images/services/crm/sertificate.png"}
            />
            <ServicePostList
                title={t(serviceData.title)}
                items={serviceData.items.map(item => ({ ...item, title: t(item.title), description: t(item.description) }))}
            />
            <CompanyPostList />
            <FormLayout
                ref={ref}
                nestedForm={
                    <CrmFeedbackForm
                        business_types={business_types}
                        task_types={task_types || []}
                    />
                }
            />
        </RequestHandler>
    );
}

export default CrmPage;

function scrollToFeedback() {
    throw new Error("Function not implemented.");
}
