'use client';

import { SingleSliderItem } from '@/components/molecules/single-slider-item'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { Progress } from "@/components/ui/progress";
import { FC, useEffect, useRef, useState } from 'react';
import { CustomCarouselControls } from '@/components/molecules/custom-controls';
import { useGetBannersQuery } from '@/api/Banners';


// const slides = [
//     {
//         title: 'Тратите много времени на маркетинг, но не видите результатов?',
//         sub_title: 'Эффективные решения от стратегии до реализации',
//         button_text: 'Получить консультацию',
//         image: '/images/main_page/slide_1.png',
//         is_active: false,
//     },
//     {
//         title: 'Хотите увеличить выручку в 2,4 или 10 раз в этом году?',
//         sub_title: 'Комплексный маркетинг под ключ для вашего бизнеса',
//         button_text: 'Узнать как',
//         image: '/images/main_page/slide_2.png',
//         is_active: false,
//     },
//     {
//         title: 'Хотите увеличить продажи и привлечь больше клиентов?',
//         sub_title: 'Бизнес-решения, нацеленные на результат',
//         button_text: 'Получить консультацию',
//         image: '/images/main_page/slide_3.png',
//         is_active: false,
//     },
// ]

interface SingleSliderListProps {
    onScrollToFeedback: () => void;
}

export const SingleSliderList: FC<SingleSliderListProps> = ({ onScrollToFeedback }) => {
    const [progress, setProgress] = useState(0);
    const progressInterval = useRef<NodeJS.Timeout | null>(null);
    const { data, error, isLoading } = useGetBannersQuery()


    useEffect(() => {
        const startProgress = () => {
            setProgress(0);
            const start = Date.now();

            if (progressInterval.current) clearInterval(progressInterval.current);

            progressInterval.current = setInterval(() => {
                const elapsed = Date.now() - start;
                const percentage = Math.min((elapsed / 7750) * 100, 100);
                setProgress(percentage);
            }, 100);
        };

        startProgress();
        const resetInterval = setInterval(startProgress, 7750);

        return () => {
            clearInterval(resetInterval);
            if (progressInterval.current) clearInterval(progressInterval.current);
        };
    }, []);

    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка загрузки данных</p>;

    return (
        <Carousel
            opts={{
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 8000,
                })
            ]}
            className="w-full h-screen max-w-[1920px]"
        >
            <CarouselContent>
                {data?.map((slide, index) => (
                    <SingleSliderItem
                        onScrollToFeedback={onScrollToFeedback}
                        key={index}
                        title={slide.title}
                        sub_title={slide.sub_title}
                        button_text={slide.button_text}
                        index={index}
                        image={slide.image}
                    />
                ))}
            </CarouselContent>
            <CustomCarouselControls />
            <CarouselPrevious iconColor='text-white' variant={'carousel'} className='hidden md:flex md:left-14 top-[600px] md:top-1/2 mt-5 md:mt-0' />
            <CarouselNext iconColor='text-white' variant={'carousel'} className='hidden md:flex md:right-14 top-[600px] md:top-1/2 mt-5 md:mt-0' />
            <Progress className='absolute bottom-0 h-2' value={progress} />
        </Carousel>
    )
}