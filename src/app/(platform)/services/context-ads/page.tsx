import { PageTitleLayout } from "@/components/templates/page-title-layout";

const ContextAds = () => {
    return (
        <div>
            <PageTitleLayout
                title={"Не упустите клиентов, готовых  купить прямо сейчас!"}
                sub_title={"Настраиваем рекламу, которая приносит заявки с первого дня запуска"}
                button_text={"Оставить заявку"}
                breadcrumb={[
                    { text: 'Главная', href: '/home' },
                    { text: 'Контекстная реклама', href: '/services/context-ads' },
                ]}
            />
        </div>
    );
}

export default ContextAds;