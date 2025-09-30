
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

export interface GetMovieOrTvDetail {
  adult: boolean;
  backdrop_path: string | null;

  // tv
  created_by?: {
    id: number;
    credit_id: string;
    name: string;
    original_name: string;
    gender: number;
    profile_path: string | null;
  }[];

  episode_run_time?: number[];
  first_air_date?: string;
  last_air_date?: string;
  in_production?: boolean;
  last_episode_to_air?: {
    air_date: string;
    episode_number: number;
    episode_type?: string;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    runtime?: number;
    season_number: number;
    show_id: number;
    still_path: string | null;
    vote_average: number;
    vote_count: number;
  };
  next_episode_to_air?: null | object;
  number_of_episodes?: number;
  number_of_seasons?: number;
  seasons?: {
    air_date: string | null;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    season_number: number;
    vote_average: number;
  }[];
  networks?: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];

  // Movies
  belongs_to_collection?: null | object;
  budget?: number;
  imdb_id?: string;
  original_title?: string;
  release_date?: string;
  revenue?: number;
  runtime?: number;
  title?: string;
  video?: boolean;

  // common
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  languages?: string[];
  origin_country?: string[];
  original_language: string;
  original_name?: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  type?: string;
  vote_average: number;
  vote_count: number;
}

export type TopRatedQueryArgs = {
  page?: number
  tvOrMovie?: string,
  popularOrTopRated?: string,
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

export interface getPopularPersonsArgs{
  page?:number,
}

export interface getPopularPersonsTypes {
  page: number
  results: [getPopularPersonsRes] 
  total_pages: number
  total_results: number
}
export interface getPopularPersonsRes {
  adult: boolean,
  gender: number,
  id: number,
  known_for: [PersonProjectType],
  known_for_department: string,
  name: string,
  original_name: string,
  popularity: number,
  profile_path: string
}

export interface PersonProjectType {
  adult: boolean,
  backdrop_path: string,
  genre_ids: [number],
  id: number,
  media_type: string,       
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string
  video?: boolean,               
  vote_average: number,
  vote_count: number
}


