import { baseApi } from "../Base";
import { BusinessTypeResponse } from "./types";


export const businessTypes = baseApi.injectEndpoints({
    endpoints(build) {
        return {
            getBusinessTypes: build.query<BusinessTypeResponse, void>({
                query: () => ({
                    url: '/business-types/',
                })
            })
        }
    }
})

export const { useGetBusinessTypesQuery } = businessTypes 