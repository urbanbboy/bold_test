import { fetchData } from "../Base/baseApi";
import { VideoProductionResponse } from "./types";

export async function getVideoProduction() {
    return fetchData<VideoProductionResponse>("/video-production/")
}