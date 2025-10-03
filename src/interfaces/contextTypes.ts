import type React from 'react';
import type { genderTranslator, isShowControlType, RenderGenresMoviesType } from './apiTypes';
import type { Location, NavigateFunction } from 'react-router-dom';




export interface MoviesContextType{
  topMoviesPage:number;
  setTopMoviesPage:React.Dispatch<React.SetStateAction<number>>;

  contenType:string
  setContentType:React.Dispatch<React.SetStateAction<string>>

  popularOrTopRated:string
  setPopularOrTopRated:React.Dispatch<React.SetStateAction<string>>

 
  location:Location;

  navigate:NavigateFunction

  genderTranslator:genderTranslator
  
  renderGenresMovies:RenderGenresMoviesType
  
}







