'use client'

import React, { useEffect, useState } from 'react'
import ChallengeCard from '@/components/molecules/company-challenge-card'
import { Heading } from '@/components/atoms/heading'
import { ChallengesBg, ChallengesSVG } from '@/assets/backgrounds'
import { motion } from 'framer-motion'
import { fadeIn, staggerTransition, viewportConfig } from '@/lib/motion'
import { Spinner } from '@/components/atoms/spinner'
import { CompanyChallengesResponse } from '@/api/Company/types'

interface CompanyChallengeListProps {
    data: CompanyChallengesResponse;
}

const CompanyChallengeList = ({
    data
}: CompanyChallengeListProps) => {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    if (!isHydrated) return <div className="flex justify-center items-center h-screen"><Spinner /></div>;

    return (
        <section className="bg-background-gray">
            <div className="max-w-[1280px] m-auto relative py-4 md:py-16 lg:py-28 z-10 overflow-hidden">
                <Heading as="h2" className="text-center">{data?.title}</Heading>
                <div className="relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-y-12 mt-5 lg:mt-14">
                        {data?.items.map((challenge, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn('up', 'spring', index * 0.2)}
                                initial="hidden"
                                whileInView="show"
                                viewport={viewportConfig}
                                transition={staggerTransition(index)}
                            >
                                <ChallengeCard
                                    idx={index}
                                    logo={challenge.logo}
                                    title={challenge.title}
                                    description={challenge.description}
                                />
                            </motion.div>
                        ))}
                    </div>
                    <ChallengesSVG className='absolute top-[150px] left-[405px] hidden xl:flex' />
                    <ChallengesBg className="hidden lg:block absolute top-7 mx-auto w-full -z-10" />
                </div>
            </div>
        </section>
    );
};

export default CompanyChallengeList;