import type React from 'react';
import type { RenderGenresMoviesType } from './apiTypes';
import type { Location } from 'react-router-dom';




export interface MoviesContextType{
  topMoviesPage:number;
  setTopMoviesPage:React.Dispatch<React.SetStateAction<number>>;

  contenType:string
  setContentType:React.Dispatch<React.SetStateAction<string>>

  popularOrTopRated:string
  setPopularOrTopRated:React.Dispatch<React.SetStateAction<string>>

  location:Location
  
  renderGenresMovies:RenderGenresMoviesType
  
}







