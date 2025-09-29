import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TMDB_API_KEY, TMDB_URL_MAIN } from '../constants/api';
import type { GetMovieOrTvDetail, getPopularPersonsArgs, getPopularPersonsTypes, MovieGenreResponse, OneMovieOrTvPageArgs, TopRatedMoviesResponse, TopRatedQueryArgs } from '../interfaces/apiTypes';


export const TMDB = createApi({
  reducerPath: "TMDB",
  baseQuery: fetchBaseQuery({
    baseUrl: TMDB_URL_MAIN
  }),
  endpoints: (builder) => ({
    getTopRatedMovies: builder.query<TopRatedMoviesResponse, TopRatedQueryArgs>({
      query: ({ page = 1, tvOrMovie = 'movie', popularOrTopRated = 'top_rated' }) => `/${tvOrMovie}/${popularOrTopRated}?api_key=${TMDB_API_KEY}&language=uk-UA&page=${page}`
    }),
    getAllGenresMovies: builder.query<MovieGenreResponse, void>({
      query: () => `/genre/movie/list?api_key=${TMDB_API_KEY}&language=uk-UA`
    }),
    getMovieOrTvDetail: builder.query<GetMovieOrTvDetail, OneMovieOrTvPageArgs>({
      query: ({ id, tvOrMovie }) => `/${tvOrMovie}/${id}?api_key=${TMDB_API_KEY}&language=uk-UA`
    }),
    getPopularPersons: builder.query<getPopularPersonsTypes, getPopularPersonsArgs>({
      query: ({ page = 1 }) => `person/popular?api_key=${TMDB_API_KEY}&language=uk-UA&page=${page}`
    })
  })
})


export const { useGetTopRatedMoviesQuery, useGetAllGenresMoviesQuery, useGetMovieOrTvDetailQuery, useGetPopularPersonsQuery } = TMDB