import { baseApi } from "../Base";
import { Type } from "./types";


export const typesApi = baseApi.injectEndpoints({
    endpoints(build) {
        return {
            getPromotionTypes: build.query<Type[], void>({
                query: () => ({
                    url: '/promotion-types/'
                })
            }),
            getPurposeTypes: build.query<Type[], void>({
                query: () => ({
                    url: '/purpose-types/'
                })
            }),
            getServiceTypes: build.query<Type[], void>({
                query: () => ({
                    url: '/service-types/'
                })
            }),
            getSiteTypes: build.query<Type[], void>({
                query: () => ({
                    url: '/site-types/'
                })
            }),
            getTaskTypes: build.query<Type[], void>({
                query: () => ({
                    url: '/task-types/'
                })
            }),
            getVideoTypes: build.query<Type[], void>({
                query: () => ({
                    url: '/video-types/'
                })
            }),
        }
    }
})

export const {
    useGetPromotionTypesQuery,
    useGetPurposeTypesQuery,
    useGetServiceTypesQuery,
    useGetSiteTypesQuery,
    useGetTaskTypesQuery,
    useGetVideoTypesQuery,
} = typesApi