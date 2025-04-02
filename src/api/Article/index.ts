
import { fetchData } from "../Base/baseApi";
import { ArticlesResponse } from "./types";

export async function getArticles() {
    return fetchData<ArticlesResponse>("/articles/")
}