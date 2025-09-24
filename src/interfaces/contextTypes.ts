import type React from 'react';
import type { RenderGenresMoviesType } from './apiTypes';




export interface MoviesContextType{
  topMoviesPage:number;
  setTopMoviesPage:React.Dispatch<React.SetStateAction<number>>;
  
  renderGenresMovies:RenderGenresMoviesType
  
}







