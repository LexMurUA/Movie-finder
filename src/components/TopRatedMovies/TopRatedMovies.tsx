import { useGetAllGenresMoviesQuery, useGetTopRatedMoviesQuery } from "../../api/api"
import { useMoviesContext } from '../../context/moviesContext';
import { Loading } from "../Loading/Loading";
import { MovieMiniDetail } from "../Movie/MovieMiniDetail";
import './TopRatedMovies.scss';



export const TopRatedMovies = () => {
    const { topMoviesPage } = useMoviesContext()
    const { data, isLoading } = useGetTopRatedMoviesQuery(topMoviesPage)


    if (isLoading) return <Loading />
    return (
        <section className="top-rated">
            <ul>
                {data?.results.map(movie => (
                    <li key={movie.id}><MovieMiniDetail {...movie} /></li>
                ))}
            </ul>
        </section>
    )
}


