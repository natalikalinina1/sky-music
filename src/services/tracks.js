import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tracksApi  = createApi({
  reducerPath: "tracksApi ",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painassasin.online/catalog/track/",
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => "all/",
    }),

    getFavoriteTracks: builder.query({
      query: () => ({
        url: "favorite/all/",
        method: "GET",
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("token")).access
          }`,
        },
      }),
    }),
  }),
});

export const { useGetAllTracksQuery, useGetFavTracksQuery } = tracksApi;