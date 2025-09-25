import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TMDB_API_KEY, TMDB_URL_MAIN } from '../constants/api';
import type {  MovieGenreResponse, TopRatedMoviesResponse, TopRatedQueryArgs } from '../interfaces/apiTypes';


export const TMDB = createApi({
  reducerPath:"TMDB",
  baseQuery: fetchBaseQuery({
    baseUrl: TMDB_URL_MAIN
  }),
  endpoints:(builder)=>({
    getTopRatedMovies: builder.query<TopRatedMoviesResponse,TopRatedQueryArgs>({
      query:({page=1,tvOrMovie='movie'})=>`/${tvOrMovie}/top_rated?api_key=${TMDB_API_KEY}&language=uk-UA&page=${page}`
    }),
    getAllGenresMovies:builder.query<MovieGenreResponse,void>({
      query:()=>`/genre/movie/list?api_key=${TMDB_API_KEY}&language=uk-UA`
    })
  })
})


export const {useGetTopRatedMoviesQuery,useGetAllGenresMoviesQuery} = TMDB