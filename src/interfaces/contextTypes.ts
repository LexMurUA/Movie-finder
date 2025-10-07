import type React from 'react';
import type { Location, NavigateFunction } from 'react-router-dom';
import type { genderTranslator, RenderGenresMoviesType } from './apiTypes';




export interface MoviesContextType {
  topMoviesPage: number;
  setTopMoviesPage: React.Dispatch<React.SetStateAction<number>>;

  contenType: string
  setContentType: React.Dispatch<React.SetStateAction<string>>

  popularOrTopRated: string
  setPopularOrTopRated: React.Dispatch<React.SetStateAction<string>>

  searchValue: string | number
  setSearchValue: React.Dispatch<React.SetStateAction<string | number>>

  location: Location;

  navigate: NavigateFunction

  genderTranslator: genderTranslator

  renderGenresMovies: RenderGenresMoviesType

}







