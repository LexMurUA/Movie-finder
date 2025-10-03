import { createContext, useContext, useState } from 'react';
import type { genderTranslator, isShowControlType, RenderGenresMoviesType } from '../interfaces/apiTypes';
import type { MoviesContextType } from '../interfaces/contextTypes';
import type { MainProps } from '../interfaces/mainTypes';
import { useLocation, useNavigate } from 'react-router-dom';



const MoviesContext = createContext<MoviesContextType | null>(null)

export const MoviesContextProvider = ({ children }: MainProps) => {

  //HOOKS===
  const [topMoviesPage, setTopMoviesPage] = useState(1)
  const [contenType, setContentType] = useState('movie')
  const [popularOrTopRated, setPopularOrTopRated] = useState('top_rated')
  const navigate = useNavigate()


  //Constants
  const location = useLocation()



  //FUNCTIONS===
  const renderGenresMovies: RenderGenresMoviesType = (currentGenres,
    allGenres) => {
    const genres: string[] = []
    currentGenres.forEach(currentGenre => {
      allGenres.forEach(genre => {
        currentGenre === genre.id && genres.push(genre.name)
      })
    })
    return genres
  }

  const genderTranslator:genderTranslator = (id) => {
    switch (id) {
      case 0:
        return 'Не вказано';
      case 1:
        return 'Жінка';
      case 2:
        return 'Чоловік';
      case 3:
        return 'Небінарний';
      default:
        return "Невідомо";
    }
  }



  return (
    <MoviesContext.Provider value={{
      topMoviesPage, setTopMoviesPage,
      renderGenresMovies,
      contenType, setContentType,
      popularOrTopRated, setPopularOrTopRated,
      location, genderTranslator,
      navigate
      
    }}>{children}</MoviesContext.Provider>
  )
}


export const useMoviesContext = () => {
  const context = useContext(MoviesContext);
  if (context === null) {
    throw new Error('useMoviesContext must be used within MoviesContextProvider')
  }
  return context
}
