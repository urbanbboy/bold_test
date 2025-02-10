'use client';

import { SingleSliderItem } from '@/components/molecules/single-slider-item'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { Progress } from "@/components/ui/progress";
import { useEffect, useRef, useState } from 'react';


const slides = [
    {
        title: 'Тратите много времени на маркетинг, но не видите результатов?',
        sub_title: 'Эффективные решения от стратегии до реализации',
        button_text: 'Получить консультацию',
        button_href: '/contacts',
        image: '/images/main_page/slide_1.png',
        is_active: false,
    },
    {
        title: 'Хотите увеличить выручку в 2,4 или 10 раз в этом году?',
        sub_title: 'Комплексный маркетинг под ключ для вашего бизнеса',
        button_text: 'Узнать как',
        button_href: '/contacts',
        image: '/images/main_page/slide_2.png',
        is_active: false,
    },
    {
        title: 'Хотите увеличить продажи и привлечь больше клиентов?',
        sub_title: 'Бизнес-решения, нацеленные на результат',
        button_text: 'Получить консультацию',
        button_href: '/contacts',
        image: '/images/main_page/slide_3.png',
        is_active: false,
    },
]

export const SingleSliderList = () => {

    const [progress, setProgress] = useState(0);
    const progressInterval = useRef<NodeJS.Timeout | null>(null);

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

    return (
        <Carousel
            opts={{
                loop: true,
                // slidesToScroll: 1
            }}
            plugins={[
                Autoplay({
                    delay: 8000,
                })
            ]}
            className="w-full max-w-[1920px] h-screen"
        >
            <CarouselContent>
                {slides.map((slide, index) => (
                    <SingleSliderItem
                        key={index}
                        title={slide.title}
                        sub_title={slide.sub_title}
                        button_href={slide.button_href}
                        button_text={slide.button_text}
                        index={index}
                        image={slide.image}
                    />
                ))}
            </CarouselContent>
            <CarouselPrevious className='left-14 top-3/4 md:top-1/2 mt-5 md:mt-0' />
            <CarouselNext className='right-14 top-3/4 md:top-1/2 mt-5 md:mt-0' />
            <Progress className='absolute bottom-0 h-2' value={progress} />
        </Carousel>
    )
}
