"use client";

import { CostCalculationForm } from "@/components/forms/cost-calculation-form";
import { FormLayout } from "@/components/templates/form-layout";
import { PageTitleLayout } from "@/components/templates/page-title-layout";
import { useGetStaticPageBySlugQuery } from "@/api/StaticPages";
import { RequestHandler } from "@/components/atoms/request-handler";
import { useSlug } from "@/hooks/useSlug";
import { useAppData } from "@/context/app-context";
import { useGetPromotionTypesQuery } from "@/api/Types";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { MarketingDepartment } from "@/components/organisms/marketing-department";
import { ParallaxSection } from "@/components/organisms/parallax";
import { useGetBusinessCardsQuery } from "@/api/BusinessType";

export interface ParallaxItem {
  src: string;
  speed: number;
  alt?: string;
  heading?: string;
}

export interface ParallaxProps {
  images: ParallaxItem[];
}

const PrintPage = () => {
  //   const t = useTranslations("AboutPage");

  const slug = useSlug();
  const { data, isLoading, error } = useGetStaticPageBySlugQuery(slug);
  const { data: promotion_types } = useGetPromotionTypesQuery();
  const {
    data: cards,
    isError,
    isLoading: loading,
  } = useGetBusinessCardsQuery();
  const { business_types } = useAppData();

  const feedbackRef = useRef<HTMLDivElement>(null);

  const scrollToFeedback = () => {
    feedbackRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <RequestHandler isLoading={isLoading} error={error} data={data}>
      {data && (
        <PageTitleLayout
          bg_image={data.image}
          title={data.title}
          top_title="Печать, которая работает на вас"
          sub_title={data.content}
          button_text={"Заказать печать"}
          scrollToFeedback={scrollToFeedback}
          breadcrumb={[
            { text: "Главная", href: "/home" },
            { text: "Оперативная печать", href: "/services/operative-print" },
          ]}
        />
      )}
      <MarketingDepartment />
      {cards && (
        <ParallaxSection
          businesscards={cards?.businesscards}
          title={cards?.title}
        />
      )}
      <FormLayout
        ref={feedbackRef}
        title={"Рассчитайте стоимость услуги"}
        nestedForm={
          <CostCalculationForm
            business_types={business_types}
            promotion_types={promotion_types || []}
          />
        }
      />
    </RequestHandler>
  );
};

export default PrintPage;
