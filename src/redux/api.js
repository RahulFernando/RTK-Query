import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3004",
  }),
  tagTypes: ["posts"],
  endpoints: (builder) => ({
    // fetch all posts
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: ["posts"],
    }),
    // add new posts
    createPost: builder.mutation({
      query: (payload) => ({
        url: "/posts",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["posts"],
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostMutation } = postsApi;
