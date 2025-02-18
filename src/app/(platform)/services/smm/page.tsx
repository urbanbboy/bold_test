import { SmmFeedbackForm } from "@/components/forms/smm-feedback-form";
import { ClientReviewList } from "@/components/organisms/client-review-list";
import { CompanySmmTeam } from "@/components/organisms/company-smm-team-list";
import { ServicePostList } from "@/components/organisms/service-post-list";
import { SMMCreatingAd } from "@/components/organisms/smm-creating-ad";
import { SMMPartnersCarousel } from "@/components/organisms/smm-partner-carousel";
import { SmmStats } from "@/components/organisms/smm-stats";
import { FormLayout } from "@/components/templates/form-layout";
import { PageTitleLayout } from "@/components/templates/page-title-layout";
import { smmCreatingAdData, smmTeamMembers } from "@/consts/data";


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

const partnersData = [
    {
        id: "1",
        image: '/images/services/smm/smm_partner.webp',
    },
    {
        id: "2",
        image: '/images/services/smm/smm_partner.webp',
    },
    {
        id: "3",
        image: '/images/services/smm/smm_partner.webp',
    },
    {
        id: "4",
        image: '/images/services/smm/smm_partner.webp',
    },
    {
        id: "5",
        image: '/images/services/smm/smm_partner.webp',
    },
    {
        id: "6",
        image: '/images/services/smm/smm_partner.webp',
    },
    {
        id: "7",
        image: '/images/services/smm/smm_partner.webp',
    },
]



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
            <SMMPartnersCarousel
                title={'Контент, который продает'}
                sub_title={'Мы создаем визуалы, которые выделяют ваш бренд среди конкурентов'}
                partnerList={partnersData}
            />
            <SMMCreatingAd
                title={smmCreatingAdData.title}
                eyebrow={smmCreatingAdData.eyebrow}
                sub_title={smmCreatingAdData.sub_title}
                items={smmCreatingAdData.items}
            />
            <CompanySmmTeam
                title={smmTeamMembers.title}
                items={smmTeamMembers.items}
            />
            <SmmStats />
            <ClientReviewList />
            <FormLayout
                title={"Узнайте стоимость SMM-продвижения"}
                sub_title={"Оставьте контакты для связи, и мы перезвоним вам"}
                nestedForm={<SmmFeedbackForm />}
            />
        </div>
    );
}

export default Smm;