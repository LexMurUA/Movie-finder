import { useGetTopRatedMoviesQuery } from "../../api/api";
import { useMoviesContext } from '../../context/moviesContext';
import { Loading } from "../Loading/Loading";
import { MovieMiniDetail } from "../Movie/MovieMiniDetail";
import { Pagination } from '../Pagination/Pagination';
import './TopRatedMovies.scss';



export const TopRatedMovies = () => {
    const { topMoviesPage, contenType,popularOrTopRated } = useMoviesContext()
    const { data, isLoading } = useGetTopRatedMoviesQuery({ page: topMoviesPage, tvOrMovie: contenType, popularOrTopRated: popularOrTopRated  })



    if (isLoading) return <Loading />
    return (
        <section className="top-rated">
            <ul>
                {data?.results.map(movie => (
                    <li key={movie.id}><MovieMiniDetail {...movie} /></li>
                ))}
            </ul>
            <Pagination totalPages={Math.min(data?.total_pages ?? 0, 500)} />
        </section>
    )
}


