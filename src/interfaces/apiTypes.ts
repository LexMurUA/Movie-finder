export interface MovieType {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface TopRatedMoviesResponse {
  page: number
  results: MovieType[]
  total_pages: number
  total_results: number
}
export interface MovieGenreResponse{
  genres:MovieGenre[]
}
export interface MovieGenre {
    id:number;
    name:string
}
export type RenderGenresMoviesType = (currentGenres:number[],allGenres:MovieGenre[])=>string[]