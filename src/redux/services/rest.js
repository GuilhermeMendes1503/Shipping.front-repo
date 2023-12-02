import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api/requests",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://54.94.9.142/",
    prepareHeaders: async (headers) => {
      headers.set("Content-Type", "application/json");
    },
  }),
  tagTypes: ["getTemplates", "getEvents"],
  endpoints: (builder) => ({
    getTemplates: builder.mutation({
      query: (body) => ({
        url: "templates",
        body: body,
        providesTags: ['getTemplates'],
        method: "POST",
      }),
    }),
    addEvent: builder.mutation({
      query: (body) => ({
        url: "addEvent",
        body: body,
        providesTags: ['addEvent'],
        method: "POST",
      }),
      invalidatesTags: ['getEvents']
    }),
    getEvents: builder.mutation({
      query: (body) => ({
        url: "events",
        body: body,
        providesTags: ['getEvents'],
        method: "POST",
      }),
    }),
  }),
});

export const { useGetTemplatesMutation, useAddEventMutation, useGetEventsMutation } = apiSlice;
