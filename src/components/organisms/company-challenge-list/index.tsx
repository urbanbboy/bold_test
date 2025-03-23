'use client'

import React, { useEffect, useState } from 'react'
import { useGetCompanyChallengesQuery } from '@/api/Company'
import ChallengeCard from '@/components/molecules/company-challenge-card'
import { Heading } from '@/components/atoms/heading'
import { ChallengesBg, ChallengesSVG } from '@/assets/backgrounds'
import { RequestHandler } from '@/components/atoms/request-handler'
import { Spinner } from '@/components/atoms/spinner'

export const CompanyChallengeList = () => {
    const { data, isLoading, error } = useGetCompanyChallengesQuery()
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    if (!isHydrated) return <div className="flex justify-center items-center h-screen"><Spinner /></div>;

    return (
        <section className="bg-background-gray">
            <div className="max-w-[1280px] m-auto relative py-4 md:py-16 lg:py-28 z-10 overflow-hidden">
                <RequestHandler
                    isLoading={isLoading}
                    error={error}
                    data={data}
                >
                    <Heading as="h2" className="text-center">{data?.title}</Heading>
                    <div className="relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-y-12 mt-5 lg:mt-14">
                            {data?.items.map((challenge, idx) => (
                                <ChallengeCard
                                    key={challenge.title}
                                    idx={idx}
                                    logo={challenge.logo}
                                    title={challenge.title}
                                    description={challenge.description}
                                />
                            ))}
                        </div>
                        <ChallengesSVG className='absolute top-[150px] left-[405px] hidden xl:flex' />
                        <ChallengesBg className="hidden lg:block absolute top-7 mx-auto w-full -z-10" />
                    </div>
                </RequestHandler>
            </div>
        </section>
    );
};