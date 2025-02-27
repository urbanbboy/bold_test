'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import React, { useState } from 'react';
import AboutUsSVG from '@/assets/company-info/about_us.svg';
import MobileAboutUsSVG from '@/assets/company-info/mobile_about_us.svg';
import { useAppData } from '@/context/app-context';

export const VideoAboutCompany = () => {
    const { data } = useAppData();
    const [showVideo, setShowVideo] = useState(false);

    const onClickVideo = () => {
        setShowVideo(true);
    };

    return (
        <div
            className="relative h-[400px] md:h-screen bg-[url('/images/main_page/video_bg.webp')] bg-cover bg-center flex justify-center items-center"
        >
            {!showVideo ? (
                <>
                    <Button
                        onClick={onClickVideo}
                        variant={'clean'}
                        size={'clean'}
                        className='z-20 p-[22px] md:p-[70px] rounded-full bg-black/30 backdrop-blur-sm shadow-md cursor-pointer hover:shadow-2xl transition-all duration-200'
                    >
                        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                            <Play size={20} color="#ffffff" style={{ width: '64px', height: '64px' }} />
                        </motion.div>
                    </Button>
                    <motion.div
                        className='absolute'
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                        <AboutUsSVG className='hidden md:block' />
                        <MobileAboutUsSVG className='md:hidden' />
                    </motion.div>
                </>
            ) : (
                // <iframe
                //     className="absolute inset-0 w-full h-full"
                //     src={data?.video || ''}
                //     title="Company Video"
                //     frameBorder="0"
                //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                //     allowFullScreen
                // />
                <video
                    className="w-full"
                    controls
                    autoPlay
                    muted
                >
                    {/* Если data?.video содержит ссылку на mp4 видео */}
                    <source src={data?.video} type="video/mp4" />
                    Ваш браузер не поддерживает тег video.
                </video>
            )}
        </div>
    );
};