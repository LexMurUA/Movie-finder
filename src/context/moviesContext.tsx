import { createContext, useContext, useState } from 'react';
import type { RenderGenresMoviesType } from '../interfaces/apiTypes';
import type { MoviesContextType } from '../interfaces/contextTypes';
import type { MainProps } from '../interfaces/mainTypes';



const MoviesContext = createContext<MoviesContextType | null>(null)

export const MoviesContextProvider = ({ children }: MainProps) => {

  //HOOKS===
  const [topMoviesPage, setTopMoviesPage] = useState(1)




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

  return (
    <MoviesContext.Provider value={{ topMoviesPage, setTopMoviesPage, renderGenresMovies }}>{children}</MoviesContext.Provider>
  )
}


export const useMoviesContext = () => {
  const context = useContext(MoviesContext);
  if (context === null) {
    throw new Error('useMoviesContext must be used within MoviesContextProvider')
  }
  return context
}
