import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IImageData } from "../reducer/AppActionsInterface";

// Define a service using a base URL and expected endpoints
export const imagesApi = createApi({
  reducerPath: "imagesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fed-team.modyo.cloud/api/" }),
  endpoints: (builder) => ({
    getImages: builder.query({
      query: (per_page) =>
        `content/spaces/animals/types/game/entries?per_page=${per_page}`,
      transformResponse: (data: IImageData) => {
        return data.entries;
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetImagesQuery } = imagesApi;
export default imagesApi.reducer;
