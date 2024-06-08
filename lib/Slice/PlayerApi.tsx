import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PlayerResponse } from "@/utils/Types";

export const PlayerApi = createApi({
  reducerPath: "PlayerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://test.services.nbl.com.au/api_cache/nbl1/synergy",
  }),
  endpoints: (builder) => ({
    getListOf: builder.query<PlayerResponse, string>({
      query: (category) => `?format=true&route=${category}`,
    }),
  }),
});

export const { useGetListOfQuery } = PlayerApi;
