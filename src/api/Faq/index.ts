

import { fetchData } from "../Base/baseApi";
import { Faq } from "./types";

export async function getFaqs() {
    return fetchData<Faq[]>("/faq/")
}