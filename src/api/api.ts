import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TMDB_API_KEY, TMDB_URL_MAIN } from '../constants/api';
import type { TopRatedMoviesResponse } from '../interfaces/api';


export const TMDB = createApi({
  reducerPath:"TMDB",
  baseQuery: fetchBaseQuery({
    baseUrl: TMDB_URL_MAIN
  }),
  endpoints:(builder)=>({
    getTopRatedMovies: builder.query<TopRatedMoviesResponse,void>({
      query:()=>`/movie/top_rated?api_key=${TMDB_API_KEY}&language=uk-UA`
    }),
    getAllGenresMovies:builder.query({
      query:()=>`/genre/movie/list?api_key=${TMDB_API_KEY}&language=uk-UA`
    })
  })
})


export const {useGetTopRatedMoviesQuery,useGetAllGenresMoviesQuery} = TMDB