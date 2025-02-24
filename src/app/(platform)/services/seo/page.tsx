import { SeoFeedbackForm } from "@/components/forms/seo-feedback-form";
import { CompanyServiceCardList } from "@/components/organisms/company-service-card-list";
import { Faq } from "@/components/organisms/faq";
import { ServicePostList } from "@/components/organisms/service-post-list";
import { ServiceStaticCardList } from "@/components/organisms/service-static-card-list";
import { FormLayout } from "@/components/templates/form-layout";
import { PageTitleLayout } from "@/components/templates/page-title-layout";
import { seoData, seoPostsData, seoCardsData } from "@/consts/data";

const Seo = () => {
    return (
        <div>
            <PageTitleLayout
                title={"Поднимите ваш бизнес на вершину поисковой выдачи"}
                sub_title={"Привлекайте больше клиентов с помощью профессиональной SEO-оптимизации от Bold Brands"}
                button_text={"Получить консультацию"}
                breadcrumb={[
                    { text: 'Главная', href: '/home' },
                    { text: 'SEO-оптимизация', href: '/services/seo' },
                ]}
            />
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
        </div>
    );
}

export default Seo