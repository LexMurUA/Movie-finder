import { useGetAllGenresMoviesQuery, useGetTopRatedMoviesQuery } from "../../api/api"
import { Movie } from "../Movie/Movie";




export const TopRatedMovies = () => {
    const { data,isLoading} = useGetTopRatedMoviesQuery()
    const datas = useGetAllGenresMoviesQuery()
    console.log(datas);
    
 
 
 
    
    
    if (isLoading) return <p>Loading...</p>

    return (
        <ul>
           {data?.results.map(movie=>(
            <li key={movie.id}><Movie {...movie} /></li>
           ))} 
        </ul>
    )
}


