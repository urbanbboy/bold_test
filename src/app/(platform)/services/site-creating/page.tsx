import { PageTitleLayout } from "@/components/templates/page-title-layout";

const SiteCreating = () => {
    return (
        <div>
            <PageTitleLayout
                title={"Создаем сайты, которые работают на вас"}
                sub_title={"Профессиональные сайты для максимальной конверсии и роста"}
                button_text={"Заказать сайт"}
                breadcrumb={[
                    { text: 'Главная', href: '/home' },
                    { text: 'Создание сайтов', href: '/site-creating' },
                ]}
            />
        </div>
    );
}

export default SiteCreating;