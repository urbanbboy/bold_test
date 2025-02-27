import React from 'react'
import { useGetCompanyChallengesQuery } from '@/api/Company'
import ChallengeCard from '@/components/molecules/company-challenge-card'
import { Heading } from '@/components/atoms/heading'
import { ChallengesBg } from '@/assets/backgrounds'
import { RequestHandler } from '@/components/atoms/request-handler'

export const CompanyChallengeList = () => {
    const { data, isLoading, error } = useGetCompanyChallengesQuery()

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
                        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 mt-5 lg:mt-14">
                            {data?.items.map((challenge, index) => (
                                <ChallengeCard
                                    key={index}
                                    idx={index}
                                    logo={challenge.logo}
                                    title={challenge.title}
                                    description={challenge.description}
                                />
                            ))}
                        </div>
                    </div>
                </RequestHandler>
                <ChallengesBg className="hidden lg:block absolute top-44 mx-auto w-full -z-10" />
            </div>
        </section>
    );
};