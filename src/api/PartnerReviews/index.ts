import { fetchData } from "../Base/baseApi";
import { PartnersReviewsResponse } from "./types";

export async function getPartnersReviews() {
    return fetchData<PartnersReviewsResponse>("/partners-reviews/")
}