import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query";

export interface Projects {
    id: number;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
}


export const api=createApi({
    baseQuery:fetchBaseQuery({baseUrl:process.env.NEXT_PUBLIC_API_URL}),
    reducerPath:"api",
    tagTypes:[],
    endpoints:(build)=>({}),
})

export const {}=api