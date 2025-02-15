import { PageTitleLayout } from "@/components/templates/page-title-layout";

const MarketingSupport = () => {
    return (
        <div>
            <PageTitleLayout
                title={" Нужна стратегия, а не хаос?"}
                sub_title={"Выстраиваем маркетинг как единую экосистему"}
                button_text={"Заказать интерграцию"}
                breadcrumb={[
                    { text: 'Главная', href: '/home' },
                    { text: 'Комплексное маркетинговое сопровождение', href: '/services/marketing-support' },
                ]}
            />
        </div>
    );
}

export default MarketingSupport;