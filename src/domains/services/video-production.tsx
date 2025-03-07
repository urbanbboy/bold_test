'use client';

import { InfoCard } from "@/components/organisms/info-card";
import { PageTitleLayout } from "@/components/templates/page-title-layout";
import { VideoAboutCompany } from "@/components/organisms/video-about-company";
import { ServicePostList } from "@/components/organisms/service-post-list";
import { ClientReviewList } from "@/components/organisms/client-review-list";
import { FormLayout } from "@/components/templates/form-layout";
import { VideoProductionForm } from "@/components/forms/video-production-form";
import { VideoProductionIcon } from "@/assets/info-card";
import { useGetStaticPageBySlugQuery } from "@/api/StaticPages";
import { useSlug } from "@/hooks/useSlug";
import { RequestHandler } from "@/components/atoms/request-handler";
import { useAppData } from "@/context/app-context";
import { useGetVideoTypesQuery } from "@/api/Types";
import useScrollToFeedback from "@/hooks/useScrollToFeedback";

const serviceData = {
    title: 'Наши услуги по Видеопродакшну',
    items: [
        {
            video_link: "/videos/lex.mp4",
            image_right: false,
            title: 'Рекламные видеоролики',
            description: 'Создание сценарного видео, основанного на тщательном маркетинговогом исследовании, позволяет нам точно соответствовать вашим бизнес-целям и вызывать нужную реакцию у целевой аудитории. Наши рекламные видеоролики направлены на привлечение заявок именно от тех, кто готов стать вашими клиентами.',
            has_button: true,
            tags: [
                {
                    tags: 'Точный таргетинг на нужную аудиторию',
                },
                {
                    tags: 'Креативные и запоминающиеся сценарии'
                },
                {
                    tags:'Высокая конверсия и возврат инвестиций'
                }
            ]
        },
        {
            video_link: "/videos/elazyk.mp4",
            image_right: true,
            title: 'Имиджевые и корпоративные видеоролики',
            description: 'Имиджевые видеоролики укрепляют доверие к вашему бренду, повышают лояльность клиентов и демонстрируют масштабы вашей компании. Наша команда справится с любой задачей, создавая видео, которые отражают ваш корпоративный дух и ценности.',
            has_button: true,
            tags: [
                {
                    tags: 'Повышение узнаваемости бренда',
                },
                {
                    tags: 'Демонстрация корпоративных ценностей и культуры'
                },
                {
                    tags:'Усиление доверия и лояльности клиентов'
                }
            ]
        },
        {
            video_link: "https://www.youtube.com/embed/Tf9ei_tQ_QA?si=ZzWL8KKNljesrGOk",
            image_right: false,
            title: 'Медиаконтент для SMM-продвижения',
            description: 'Создание контента для социальных сетей — это искусство, которым мы владеем в совершенстве. Наш медиаконтент увеличивает привлекательность ваших рекламных кампаний и повышает их эффективность. Мы предлагаем выгодные пакетные предложения, интегрированные в вашу SMM-стратегию, чтобы обеспечить максимальный охват и вовлеченность аудитории.',
            has_button: true,
            tags: [
                {
                    tags: 'Повышение вовлеченности и активности аудитории',
                },
                {
                    tags: 'Креативные и разнообразные форматы контента'
                },
                {
                    tags:'Синергия с общей маркетинговой стратегией'
                }
            ]
        },
        {
            video_link: "https://www.youtube.com/embed/Tf9ei_tQ_QA?si=ZzWL8KKNljesrGOk",
            image_right: true,
            title: 'Съемка Life Events',
            description: 'Мы проводим съемки важных событий и мероприятий: конференций, концертов, форумов и многого другого. Наши отчетные видеоролики сохраняют самые яркие моменты и передают атмосферу события, помогая вам делиться достижениями и успехами с вашей аудиторией.',
            has_button: true,
            tags: [
                {
                    tags: 'Профессиональная съемка и монтаж',
                },
                {
                    tags: 'Передача атмосферы и эмоций события'
                },
                {
                    tags:'Создание качественных отчетных материалов'
                }
            ]
        },
        {
            video_link: "https://www.youtube.com/embed/Tf9ei_tQ_QA?si=ZzWL8KKNljesrGOk",
            image_right: false,
            title: 'Фотосессия',
            description: 'Выездные и студийные съемки выполняют наши опытные фотографы, создавая эффектные снимки и обеспечивая безупречную обработку. Мы предлагаем несколько видов фотосессий: продуктовые, FASHION, портретные и другие, чтобы удовлетворить любые потребности вашего бизнеса.',
            has_button: true,
            tags: [
                {
                    tags: 'Профессиональная постановка и съемка',
                },
                {
                    tags: 'Креативная обработка и ретушь'
                },
                {
                    tags:'Разнообразие форматов и стилей фотосессий'
                }
            ]
        },
    ]
}

const VideoProductionPage = () => {
    const slug = useSlug()
    const { data, isLoading, error } = useGetStaticPageBySlugQuery(slug)
    const { data: video_types } = useGetVideoTypesQuery()
    const { business_types, data: info } = useAppData()
    const { ref, scrollToFeedback } = useScrollToFeedback()

    return (
        <RequestHandler
            isLoading={isLoading}
            error={error}
            data={data}
        >
            {data &&
                <PageTitleLayout
                    scrollToFeedback={scrollToFeedback}
                    title={data.title}
                    sub_title={data.content}
                    button_text={"Заказать видео-ролик"}
                    breadcrumb={[
                        { text: 'Главная', href: '/home' },
                        { text: 'Видеопродакшн', href: '/services/video-production' },
                    ]}
                    bg_image={data.image}
                />}
            <InfoCard
                title={"Креатив, который выделяет ваш бренд"}
                description={"С более чем 10-летним опытом в видеопродакшн, наша команда профессионалов создает видеоролики, которые не только привлекают внимание, но и эффективно достигают ваших бизнес-целей."}
                video={info?.video}
                card_title={"В Bold Brands мы уверены"}
                card_description={"Качественный видеоконтент — это ключ к успешному продвижению вашего бизнеса."}
                card_icon={<VideoProductionIcon />}
            />
            <VideoAboutCompany />
            <ServicePostList
                title={serviceData.title}
                items={serviceData.items}
            />
            <ClientReviewList />
            <FormLayout
                ref={ref}
                title={"Рассчитайте стоимость вашего Видеопроекта"}
                nestedForm={
                    <VideoProductionForm
                        business_types={business_types}
                        video_types={video_types || []}
                    />
                }
            />
        </RequestHandler>
    );
}

export default VideoProductionPage;