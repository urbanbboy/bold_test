'use client';

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Heading } from "@/components/atoms/heading";
import { SubTitle } from "@/components/atoms/sub-title";
import { Button } from "@/components/ui/button";

const reviews = {
    title: "Видеоотзывы от наших клиентов",
    sub_title: "Что говорят наши клиенты",
    items: [
        { video: "https://www.youtube.com/watch?v=a0ul-BghOAs" },
        { video: "https://www.youtube.com/watch?v=tXB7odE1HuA" },
        { video: "https://www.youtube.com/watch?v=pnoyEohLz48" }
    ]
};

export const ClientReviewList = ({hasSubTitle}: { hasSubTitle?: boolean }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = reviews.items.length;

    const handleNext = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const handlePrev = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const extractYouTubeID = (url: string) => {
        const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/|embed\/))([\w-]+)/);
        return match ? match[1] : "";
    };

    return (
        <div className="px-5 md:px-14 lg:px-32 my-14">
            <div className="max-w-[1280px] m-auto">
                <div className="flex flex-col md:flex-row justify-between gap-y-5">
                    <div className="space-y-4">
                        {hasSubTitle && <SubTitle className="uppercase lg:text-xl">{reviews.sub_title}</SubTitle>}
                        <Heading as="h2" className="max-w-screen-lg">{reviews.title}</Heading>
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


                {/* 
                    Временная заглушка пока бд не заполнится отзывами. 
                    Надо будет посмотреть как можно реализовать видеопроигрыватель
                */}
                <div className="relative mt-4 rounded-md">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPage}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            // className="absolute inset-0 w-full h-full"
                        >
                            <iframe
                                className="w-full h-[240px] md:h-[400px] lg:h-[600px] rounded-[24px]"
                                src={`https://www.youtube.com/embed/${extractYouTubeID(reviews.items[currentPage].video)}`}
                                allowFullScreen
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

        </div>
    )
}