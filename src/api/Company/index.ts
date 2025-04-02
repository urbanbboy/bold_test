import { baseApi } from "../Base";
import { baseUrl, fetchData } from "../Base/baseApi";
import {
    CompanyAchievementsResponse,
    CompanyAdvertisingResponse,
    CompanyApplicationResponse,
    CompanyApplicationsResponse,
    CompanyBrandingResponse,
    CompanyChallengesResponse,
    CompanyFeaturesResponse,
    CompanyInfoResponse,
    CompanyPartnersResponse,
    CompanyPostsResponse,
    CompanyServicesResponse,
    CompanyTeamResponse,
    CompanyVideoReviewsResponse
} from "./types";


export const companyApi = baseApi.injectEndpoints({
    endpoints(build) {
        return {
            getCompanyAchievements: build.query<CompanyAchievementsResponse, void>({
                query: () => ({
                    url: '/company-achievements/',
                })
            }),
            getCompanyAdvertising: build.query<CompanyAdvertisingResponse, void>({
                query: () => ({
                    url: '/company-advertising/',
                })
            }),
            getCompanyApplications: build.query<CompanyApplicationsResponse, void>({
                query: () => ({
                    url: '/company-applications/',
                })

            }),
            getCompanyApplication: build.query<CompanyApplicationResponse, string>({
                query: (id) => ({
                    url: `/company-applications/${id}/`,
                })
            }),
            getCompanyBranding: build.query<CompanyBrandingResponse, void>({
                query: () => ({
                    url: '/company-brending/'
                })
            }),
            getCompanyChallenges: build.query<CompanyChallengesResponse, void>({
                query: () => ({
                    url: '/company-challenges/'
                })
            }),
            getCompanyFeatures: build.query<CompanyFeaturesResponse, void>({
                query: () => ({
                    url: '/company-features/'
                })
            }),
            getCompanyInfo: build.query<CompanyInfoResponse, void>({
                query: () => ({
                    url: '/company-info/'
                })
            }),
            getCompanyPartners: build.query<CompanyPartnersResponse, void>({
                query: () => ({
                    url: '/company-partners/'
                })
            }),
            getCompanyPosts: build.query<CompanyPostsResponse, void>({
                query: () => ({
                    url: '/company-posts/'
                })
            }),
            getCompanyServices: build.query<CompanyServicesResponse, void>({
                query: () => ({
                    url: '/company-services/'
                })
            }),
            getCompanyTeam: build.query<CompanyTeamResponse, void>({
                query: () => ({
                    url: '/company-team/'
                })
            }),
            getCompanyVideoReviews: build.query<CompanyVideoReviewsResponse, void>({
                query: () => ({
                    url: '/company-video-reviews/'
                })
            }),
        }
    }
})

export const {
    useGetCompanyAchievementsQuery,
    useGetCompanyAdvertisingQuery,
    useGetCompanyApplicationQuery,
    useGetCompanyApplicationsQuery,
    useGetCompanyBrandingQuery,
    useGetCompanyChallengesQuery,
    useGetCompanyFeaturesQuery,
    useGetCompanyInfoQuery,
    useGetCompanyPartnersQuery,
    useGetCompanyPostsQuery,
    useGetCompanyServicesQuery,
    useGetCompanyTeamQuery,
    useGetCompanyVideoReviewsQuery,
} = companyApi


export async function getVideoReviews(cache: RequestCache = "force-cache") {
    try {
        let acceptLanguage = "ru";

        if (typeof window !== "undefined") {
            acceptLanguage = localStorage.getItem("locale") || "ru";
        } else {
            const { cookies } = await import("next/headers");
            const cookieStore = await cookies();
            acceptLanguage = cookieStore.get("NEXT_LOCALE")?.value || "ru";
        }

        const res = await fetch(`${baseUrl}/company-video-reviews/`, {
            cache,
            headers: {
                "Accept-Language": acceptLanguage,
            },
        });

        if (!res.ok) {
            console.error(`Ошибка загрузки баннеров: ${res.status} ${res.statusText}`);
            throw new Error("Failed to fetch home page data");
        }

        return res.json();
    } catch (error) {
        console.error("Ошибка в getVideoReviews:", error);
        throw error;
    }
}

export async function getCompanyChallenges() {
    return fetchData<CompanyChallengesResponse>("/company-challenges/")
}

export async function getCompanyAdvantages() {
    return fetchData<CompanyAchievementsResponse>("/company-achievements/")
}