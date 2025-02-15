import { PageTitleLayout } from "@/components/templates/page-title-layout";

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
        </div>
    );
}

export default Seo