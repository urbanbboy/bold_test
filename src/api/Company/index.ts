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
            getCompanyInfo: build.query<CompanyInfoResponse, void>({
                query: () => ({
                    url: '/company-info/'
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
    useGetCompanyApplicationQuery,
    useGetCompanyApplicationsQuery,
    useGetCompanyInfoQuery,
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

export async function getCompanyAds() {
    return fetchData<CompanyAdvertisingResponse>("/company-advertising/")
}

export async function getCompanyServices() {
    return fetchData<CompanyServicesResponse>("/company-services/")
}

export async function getCompanyPosts() {
    return fetchData<CompanyPostsResponse>("/company-posts/")
}

export async function getCompanyPartners() {
    return fetchData<CompanyPartnersResponse>("/company-partners/")
}

export async function getCompanyFeatures(){
    return fetchData<CompanyFeaturesResponse>("/company-features/")
}

export async function getCompanyBranding(){
    return fetchData<CompanyBrandingResponse>("/company-brending/")
}