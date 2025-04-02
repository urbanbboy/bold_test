import { fetchData } from "../Base/baseApi";
import { Post, PostsResponse } from "./types";

export async function getPosts() {
    return fetchData<PostsResponse>("/posts/")
}

export async function getPostById(id: string) {
    return fetchData<Post>(`/posts/${id}/`)
}