'use client';

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Heading } from "@/components/atoms/heading";
import { SubTitle } from "@/components/atoms/sub-title";
import { Button } from "@/components/ui/button";
import { useGetCompanyVideoReviewsQuery } from "@/api/Company";
import ReactPlayer from 'react-player/lazy';


export const ClientReviewList = ({ hasSubTitle }: { hasSubTitle?: boolean }) => {
    const { data } = useGetCompanyVideoReviewsQuery()
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = data?.items.length || 0;

    const handleNext = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const handlePrev = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    return (
        <div className="px-5 md:px-14 lg:px-32 my-16 md:my-24">
            <div className="max-w-[1280px] m-auto">
                <div className="flex flex-col md:flex-row justify-between gap-y-5">
                    <div className="space-y-4">
                        {hasSubTitle && <SubTitle className="uppercase lg:text-xl">{data?.sub_title}</SubTitle>}
                        <Heading as="h2" className="max-w-screen-lg">{data?.title}</Heading>
                    </div>
                    <div className="flex items-end gap-2">
                        <div className="flex items-center gap-x-2">
                            <Button
                                className="bg-background-gray2 hover:bg-graphic-gray"
                                variant="ghost"
                                onClick={handlePrev}
                                disabled={currentPage === 0}
                            >
                                <ChevronLeft size={18} />
                            </Button>

                            <div className="text-sm whitespace-nowrap">
                                {currentPage + 1} <span className="text-graphic-gray">/ {totalPages}</span>
                            </div>

                            <Button
                                className="bg-background-gray2 hover:bg-graphic-gray"
                                variant="ghost"
                                onClick={handleNext}
                                disabled={currentPage === totalPages - 1}
                            >
                                <ChevronRight size={18} />
                            </Button>
                        </div>

                    </div>
                </div>
                <div
                    className="player-wrapper rounded-md mt-5 md:mt-10"
                >
                    <ReactPlayer
                        fallback={<>Загрузка...</>}
                        url={data?.items[currentPage].video}
                        width={'100%'}
                        height={'100%'}
                        controls={true}
                        playsinline
                        className='react-player'
                    />
                </div>
            </div>

        </div >
    )
}

{/* <video
    className="w-full h-auto rounded-md"
    src={data?.items[currentPage].video}
    controls
    autoPlay
    playsInline
    muted
>
    Ваш браузер не поддерживает тег
</video> */}