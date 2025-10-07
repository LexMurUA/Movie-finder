import { useGetInCinemaNowQuery } from "../../api/api"
import { useMoviesContext } from "../../context/moviesContext"
import { Loading } from "../Loading/Loading";
import './InCinema.scss';

export const InCinema = ()=>{
    const {topMoviesPage} = useMoviesContext()
    const {data,isLoading}= useGetInCinemaNowQuery({page:topMoviesPage})
    const {results} = data ?? {}
   
    isLoading && <Loading />
    return(
        <section className="incinema">
            <div className="incinema-movies">
                {results?.map(movie=>(
                    <div key={movie.id} className="container-incinema-movies-item">
                        <span>{movie.release_date}</span>
                         <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Poster" />
                        <span>{movie.title}</span>
                    </div>
                ))}

            </div>

        </section>
    )
}