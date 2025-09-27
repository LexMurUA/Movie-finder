
export interface MediaType {
  id: number
  title?: string
  name?: string
  original_title?: string
  original_name?: string
  release_date?: string
  first_air_date?: string
  overview: string
  poster_path: string
  vote_average: number
  vote_count: number
  genre_ids: number[]
  popularity: number
  original_language: string
}

export interface OneMovieOrTvPageArgs {
  id: number,
  tvOrMovie: string
}

export interface getMovieOrTvDetailTypes {
  adult: boolean,
  backdrop_path: string,
  belongs_to_collection: string | null,
  budget: number,
  genres: [{ id: number, name: string }]
  homepage: string,
  id: number,
  imdb_id: string,
  origin_country: [string],
  original_language: string,
  original_title: string,
  overview:
  string
  popularity: number,
  poster_path: string,
  production_companies: [{
    id: number,
    logo_path: string,
    name: string,
    origin_country: string
  }],
  production_countries: [{ iso_3166_1: string, name: string },],
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: [
    { english_name: string, iso_639_1: string, name: string },
  ],
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
}



export type TopRatedQueryArgs = {
  page?: number
  tvOrMovie?: string,
  popularOrTopRated?: 'top_rated' | 'popular'
}
export interface TopRatedMoviesResponse {
  page: number
  results: MediaType[]
  total_pages: number
  total_results: number
}
export interface MovieGenreResponse {
  genres: MovieGenre[]
}
export interface MovieGenre {
  id: number;
  name: string
}
export type RenderGenresMoviesType = (currentGenres: number[], allGenres: MovieGenre[]) => string[]