import { ServicePostList } from "@/components/organisms/service-post-list";
import { PageTitleLayout } from "@/components/templates/page-title-layout";

const serviceData = {
    title: 'Подход, который выделит ваш бренд среди конкурентов',
    items: [
        {
            image: "/images/about_page/our_philosophy.webp",
            image_right: false,
            title: 'Погружение в ваш бизнес',
            description: 'Анализируем рынок, изучаем конкурентов, выявляем особенности вашей целевой аудитории. Вместе с вами формируем цели продвижения.',
        },
        {
            image: "/images/about_page/our_philosophy.webp",
            image_right: true,
            title: 'Разработка стратегии',
            description: 'Создаем уникальную SMM-стратегию, которая выделяет ваш бренд и приносит реальные результаты.',
        },
        {
            image: "/images/about_page/our_philosophy.webp",
            image_right: false,
            title: 'Создание контента',
            description: 'Креатив-команда: мобилограф, копирайтер и дизайнер — разрабатывает визуалы и тексты, которые привлекают внимание и побуждают к покупкам.',
        },
        {
            image: "/images/about_page/our_philosophy.webp",
            image_right: true,
            title: 'Настройка рекламы',
            description: 'Таргетолог настраивает рекламу так, чтобы привлекать вашу целевую аудиторию и создавать поток заявок.',
        },
    ]
}

const Smm = () => {
    return (
        <div>
            <PageTitleLayout
                title={"Социальные сети, которые приносят поток клиентов"}
                sub_title={"Соцсети станут вашим главным каналом продаж"}
                button_text={"Получить консультацию"}
                breadcrumb={[
                    { text: 'Главная', href: '/home' },
                    { text: 'Digital продвижение', href: '/services/smm' },
                ]}
            />
            <ServicePostList
                title={serviceData.title}
                items={serviceData.items}
            />
        </div>
    );
}

export default Smm;