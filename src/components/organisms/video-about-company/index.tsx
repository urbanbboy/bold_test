import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import React from 'react'

import AboutUsSVG from '@/assets/company-info/about_us.svg'
import MobileAboutUsSVG from '@/assets/company-info/mobile_about_us.svg'

export const VideoAboutCompany = () => {
    
    const onClickVideo = () => {
        console.log('clicked')
    }

    return (
        <div
            className="relative h-[400px] md:h-screen bg-[url('/images/main_page/video_bg.png')] bg-cover bg-center flex justify-center items-center"
        >
            <Button
                onClick={onClickVideo}
                variant={'clean'}
                size={'clean'}
                className='z-20 p-[22px] md:p-[70px] rounded-full bg-black/30 backdrop-blur-sm shadow-md cursor-pointer hover:shadow-2xl transition-all duration-200'
            >
                <Play size={20} color="#ffffff" style={{ width: '64px', height: '64px' }} />
            </Button>
            <motion.div
                className='absolute'
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
                <AboutUsSVG className='hidden md:block' />
                <MobileAboutUsSVG className='md:hidden' />
            </motion.div>

        </div>
    )
}
