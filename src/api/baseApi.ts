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

export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000"
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductWithCategory[], void>({query: () => "/products"}),
        register: builder.mutation<RegisterResponse, RegisterRequest>({
            query: (data) => ({
                url: "/user/register",
                method: "POST",
                body: data
            })
        })
    })
})

export const {
    useGetProductsQuery,
    useRegisterMutation
} = baseApi; 