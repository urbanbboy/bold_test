import { PageTitleLayout } from "@/components/templates/page-title-layout";

const VideoProduction = () => {
    return (
        <div>
            <PageTitleLayout
                title={"Видеоконтент, который вдохновляет и продает"}
                sub_title={"Создаем уникальные видеоролики, которые выделяют ваш бренд и приводят к росту продаж"}
                button_text={"Заказать видео-ролик"}
                breadcrumb={[
                    { text: 'Главная', href: '/home' },
                    { text: 'Видеопродакшн', href: '/services/video-production' },
                ]}
            />
        </div>
    );
}

export default VideoProduction;