import { useGetAllGenresMoviesQuery, useGetTopRatedMoviesQuery } from "../../api/api"
import { useMoviesContext } from '../../context/moviesContext';
import {  MovieMiniDetail } from "../Movie/MovieMiniDetail";




export const TopRatedMovies = () => {
    const {topMoviesPage} = useMoviesContext()
    const { data, isLoading } = useGetTopRatedMoviesQuery(topMoviesPage)
  
    
 
 
 
    
    
    if (isLoading) return <p>Loading...</p>

    return (
        <ul>
           {data?.results.map(movie=>(
            <li key={movie.id}><MovieMiniDetail {...movie} /></li>
           ))} 
        </ul>
    )
}


