import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TMDB_URL_MAIN } from '../constants/api';



export const TMDB = createApi({
  reducerPath:"TMDB",
  baseQuery: fetchBaseQuery({
    baseUrl: TMDB_URL_MAIN
  }),
  endpoints:(builder)=>({
    getTopRatedMovies: builder.query<>
  })
})