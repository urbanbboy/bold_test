import { PageTitleLayout } from "@/components/templates/page-title-layout";

const Crm = () => {
    return (
        <div>
            <PageTitleLayout
                title={"Управляйте клиентами эффективно"}
                sub_title={"Интеграция CRM-систем для оптимизации процессов и роста продаж"}
                button_text={"Заказать интерграцию"}
                breadcrumb={[
                    { text: 'Главная', href: '/home' },
                    { text: 'Интеграция CRM', href: '/services/crm' },
                ]}
            />
        </div>
    );
}

export default Crm;