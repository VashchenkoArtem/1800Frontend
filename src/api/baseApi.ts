import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ProductWithCategory } from "../types/product";

interface RegisterResponse{
    id: number
    email: string
}

interface RegisterRequest{
    email: string
    password: string
}

interface LoginRequest{
    email: string,
    password: string
}

interface UserResponse{
    id: number,
    email: string
}
export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000",
        credentials: "include"
    }),
    tagTypes: ['Me'],
    endpoints: (builder) => ({
        getProducts: builder.query<ProductWithCategory[], void>({query: () => "/products"}),
        register: builder.mutation<RegisterResponse, RegisterRequest>({
            query: (data) => ({
                url: "/user/register",
                method: "POST",
                body: data
            })
        }),
        login: builder.mutation<void, LoginRequest>({
            query: (data) => ({
                url: "/user/login",
                method: "POST",
                body: data
            }),
            invalidatesTags: ['Me']
        }),
        getMe: builder.query<UserResponse, void>({
            query: () => '/user/me',
            providesTags: ['Me']
            
        }),
        
    })
})

export const {
    useGetProductsQuery,
    useRegisterMutation,
    useLoginMutation,
    useGetMeQuery
} = baseApi; 