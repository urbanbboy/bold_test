import { fetchData } from "../Base/baseApi";
import { Type } from "./types";

export async function getPromotionTypes() {
    return fetchData<Type[]>("/promotion-types/")
}

export async function getServiceTypes() {
    return fetchData<Type[]>("/service-types/")
}

export async function getTaskTypes() {
    return fetchData<Type[]>("/task-types/")
}

export async function getSiteStatus() {
    return fetchData<Type[]>("/site-status/")
}

export async function getSiteTypes() {
    return fetchData<Type[]>("/site-types/")
}

export async function getSocialTypes() {
    return fetchData<Type[]>("/social-types/")
}

export async function getVideoTypes() {
    return fetchData<Type[]>("/video-types/")
}