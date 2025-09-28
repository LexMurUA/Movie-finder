import { useGetAllGenresMoviesQuery } from "../../api/api";
import { useMoviesContext } from '../../context/moviesContext';
import type { MediaType } from "../../interfaces/apiTypes";
import './MovieMiniDetail.scss'
import star from '../../assets/images/star.svg'
import { Link } from 'react-router-dom';


export const MovieMiniDetail = ({ id, title, name, genre_ids, original_title, original_name, poster_path, popularity,
    original_language, release_date, first_air_date, overview, vote_average, vote_count
}: MediaType) => {
    const { renderGenresMovies } = useMoviesContext()
    const { data } = useGetAllGenresMoviesQuery()
    const genres = renderGenresMovies(genre_ids, data?.genres ?? [])



    return (
        <Link to={title ? `/movie/${id}` : `/tv/${id}`}>
            <div className="moveminidetail" key={id}>
                <div className="moveminidetail-header">
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                    <h3>{title ?? name}/{original_title ?? original_name}</h3>
                </div>
                <div className="moveminidetail-body">
                    <div className="moveminidetail-body-info">

                        <div className='informs'>
                            <span><b>Рейтинг TMDB:</b></span>
                            <span><img src={star} alt="star" /> {popularity}</span>

                        </div>
                        <div className='informs'>
                            <span><b>Мова оригіналу:</b></span>
                            <span>{original_language}</span>
                        </div>
                        <div className='informs'>
                            <span><b>Дата виходу:</b></span>
                            <span>{release_date ?? first_air_date}</span>
                        </div>
                        <div className='informs'>
                            <span><b>Оцінка глядачів:</b></span>
                            <span>{vote_average}</span>
                        </div>
                        <div className='informs'>
                            <span><b>Кількість голосів:</b></span>
                            <span>{vote_count}</span>
                        </div>
                    </div>
                    <div className="moveminidetail-body-genres">
                        <span><b>Жанр:</b></span>
                        {
                            genres.length === 0 ? <span>Категорія незабаром буде додана</span>
                                : (
                                    genres.map((genre, idx) => (
                                        <span key={idx}>{genre}</span>
                                    ))
                                )
                        }

                    </div>
                    <article className="moveminidetail-body-article">
                        {overview.length != 0 ? overview : <p>Опис незабаром буде додано.</p>}
                    </article>

                </div>
            </div>
        </Link>
    )
}