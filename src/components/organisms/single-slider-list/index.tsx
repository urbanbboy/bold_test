'use client';

import { SingleSliderItem } from '@/components/molecules/single-slider-item'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { memo } from 'react';
import { CustomCarouselControls } from '@/components/molecules/custom-controls';
import Fade from 'embla-carousel-fade';
import { Banner } from '@/api/Banners/types';

const MemoizedCarouselPrevious = memo(({ className }: { className?: string }) => (
    <CarouselPrevious iconColor="text-white" variant="carousel" className={className} />
));

MemoizedCarouselPrevious.displayName = "MemoizedCarouselPrevious";

const MemoizedCarouselNext = memo(({ className }: { className?: string }) => (
    <CarouselNext iconColor="text-white" variant="carousel" className={className} />
));

MemoizedCarouselNext.displayName = "MemoizedCarouselNext";

const SingleSliderList = ({ banners }: { banners: Banner[] }) => {
    return (
        <Carousel
            hasProgressBar
            opts={{
                loop: true,
            }}
            plugins={[Fade()]}
            className="w-full h-screen max-w-[1920px]"
        >
            <CarouselContent>
                {banners.map((slide, index) => (
                    <SingleSliderItem
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
            <MemoizedCarouselPrevious className="hidden md:flex md:left-14 top-[600px] md:top-1/2 mt-5 md:mt-0" />
            <MemoizedCarouselNext className="hidden md:flex md:right-14 top-[600px] md:top-1/2 mt-5 md:mt-0" />
        </Carousel>
    )
}

export default SingleSliderList;