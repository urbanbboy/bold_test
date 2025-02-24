import { FeedbackForm } from "@/components/forms/feedback-form";
import { CompanyPostList } from "@/components/organisms/company-post-list";
import { CompanyServiceCardList } from "@/components/organisms/company-service-card-list";
import { ServiceStaticCardList } from "@/components/organisms/service-static-card-list";
import { FormLayout } from "@/components/templates/form-layout";
import { PageTitleLayout } from "@/components/templates/page-title-layout";
import { contextAdCardData, contextAdData } from "@/consts/data";

const ContextAds = () => {
    return (
        <div>
            <PageTitleLayout
                title={"Не упустите клиентов, готовых купить прямо сейчас!"}
                sub_title={"Настраиваем рекламу, которая приносит заявки с первого дня запуска"}
                button_text={"Оставить заявку"}
                breadcrumb={[
                    { text: 'Главная', href: '/home' },
                    { text: 'Контекстная реклама', href: '/services/context-ads' },
                ]}
            />
            <ServiceStaticCardList
                title={contextAdData.title}
                items={contextAdData.items}
            />
            <CompanyServiceCardList
                title={contextAdCardData.title}
                items={contextAdCardData.items}
            />
            <CompanyPostList />
            <FormLayout
                nestedForm={<FeedbackForm />}
            />
        </div>
    );
}

export default ContextAds;