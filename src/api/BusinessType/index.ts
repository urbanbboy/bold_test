import { baseApi } from "../Base";
import { Type } from "../Types/types";
import { ParallaxData } from "./types";
import { fetchData } from "../Base/baseApi";

export const businessTypes = baseApi.injectEndpoints({
    endpoints(build) {
        return {
            getBusinessTypes: build.query<Type[], void>({
                query: () => ({
                    url: "/business-types/",
                }),
            }),
        };
    },
});

export const { useGetBusinessTypesQuery } = businessTypes;

export async function getBusinessCards() {
    return fetchData<ParallaxData>("/business-cards/")
}