import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ChatHistoryProps } from "./history"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/" }),
  tagTypes: ["Chat"],
  endpoints: (builder) => ({
    getHistory: builder.query<ChatHistoryProps[], void>({
      query: () => "chat_history?_sort=-timestamp",
      providesTags: ["Chat"],
    }),
    postHistory: builder.mutation({
      query: (body) => ({
        url: "chat_history",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Chat"],
    }),
  }),
})

export const { useGetHistoryQuery, usePostHistoryMutation } = apiSlice
