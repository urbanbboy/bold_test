import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'http://159.65.113.107:8000/api/v1'

export const baseApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl,
    }),
    reducerPath: "baseApi",
    endpoints: () => ({}),
    tagTypes: [""],
});