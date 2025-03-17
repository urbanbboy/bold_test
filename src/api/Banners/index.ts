
import { baseApi } from "../Base";
import { baseUrl } from "../Base/baseApi";
import { Banner } from "./types";

const bannersApi = baseApi.injectEndpoints({
    endpoints(build) {
        return {
            getBanners: build.query<Banner[], void>({
                query: () => ({
                    url: "/banners/",
                    method: "GET",
                }),
            }),
        };
    },
});

export const { useGetBannersQuery } = bannersApi;


export async function getBanners() {
    const res = await fetch(`${baseUrl}/banners/`, { cache: "force-cache" });
    if (!res.ok) throw new Error("Failed to fetch home page data");
    return res.json();
}