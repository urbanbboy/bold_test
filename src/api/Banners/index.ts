
import { fetchData } from "../Base/baseApi";
import { Banner } from "./types";

export async function getBanners() {
    return fetchData<Banner[]>('/banners/')
}