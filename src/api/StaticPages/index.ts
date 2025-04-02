

import { fetchData } from "../Base/baseApi";
import { StaticPage } from "./types";


export async function getStaticPageBySlug(slug: string) {
    return fetchData<StaticPage>(`/static-pages/${slug}/`)
}