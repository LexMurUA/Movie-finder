
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