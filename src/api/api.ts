import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TMDB_API_KEY, TMDB_URL_MAIN } from '../constants/api';
import { GetPersonDetailResponse, type CastTypes, type GetMovieOrTvDetail, type GetPersonDetailArgs, type getPopularPersonsArgs, type getPopularPersonsTypes, type GetTvDetailArgs, type MovieGenreResponse, type OneMovieOrTvPageArgs, type TopRatedMoviesResponse, type TopRatedQueryArgs, type TvCreditArgs, type TvCredits } from '../interfaces/apiTypes';


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
    }),
    getPersonDetail: builder.query<GetPersonDetailResponse, GetPersonDetailArgs>({
      query: ({ id }) => `/person/${id}?api_key=${TMDB_API_KEY}&language=uk-UA`
    }),
    getPersonMovies: builder.query<CastTypes, GetPersonDetailArgs>({
      query: ({ id }) => `/person/${id}/movie_credits?api_key=${TMDB_API_KEY}&language=uk-UA`
    }),
    getPersonTvs: builder.query<TvCredits,GetTvDetailArgs>({
      query: ({ id }) => `/person/${id}/tv_credits?api_key=${TMDB_API_KEY}&language=uk-UA`
    }),
    getUserSearch:builder.query({
      query: (value) => `search/multi?api_key=${TMDB_API_KEY}&language=uk-UA&query=${value}`
    })


  })
})


export const { useGetTopRatedMoviesQuery, useGetAllGenresMoviesQuery,
  useGetMovieOrTvDetailQuery, useGetPopularPersonsQuery,
  useGetPersonDetailQuery, useGetPersonMoviesQuery,useGetPersonTvsQuery, useGetUserSearchQuery } = TMDB