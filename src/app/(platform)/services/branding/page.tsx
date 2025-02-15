import { PageTitleLayout } from "@/components/templates/page-title-layout";

const Brading = () => {
    return (
        <div>
            <PageTitleLayout
                title={"Брендинг, который выделяет вас среди конкурентов"}
                sub_title={"От концепции до реализации — мы сопровождаем вас на каждом этапе создания вашего бренда "}
                button_text={"Получить консультацию"}
                breadcrumb={[
                    { text: 'Главная', href: '/home' },
                    { text: 'Брендинг', href: '/services/branding' },
                ]}
            />
        </div>
    );
}

export default Brading;