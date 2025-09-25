import { useGetAllGenresMoviesQuery } from "../../api/api";
import { useMoviesContext } from '../../context/moviesContext';
import type { MovieType } from "../../interfaces/apiTypes";
import './MovieMiniDetail.scss'

export const MovieMiniDetail = ({ id, title, genre_ids, original_title, poster_path, popularity,
    original_language, release_date, overview, vote_average, vote_count
}: MovieType) => {
    const { renderGenresMovies } = useMoviesContext()
    const { data } = useGetAllGenresMoviesQuery()
    const genres = renderGenresMovies(genre_ids, data?.genres ?? [])



    return (
        <div className="moveminidetail" key={id}>
            <div className="moveminidetail-header">
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                <h3>{title}/{original_title}</h3>
            </div>
            <div className="moveminidetail-body">
                <div className="moveminidetail-body-info">
                    <p>Жанр: {
                        genres.length === 0 ? <span>Категорія незабаром буде додана</span>
                            : (
                                genres.map((genre, idx) => (
                                    <span key={idx}>{genre}</span>
                                ))
                            )
                    }
                    </p>
                    <span>Рейтинг TMDB: {popularity}</span>
                    <span>Мова оригіналу: {original_language}</span>
                    <span>Дата виходу: {release_date}</span>
                    <span>Оцінка глядачів: {vote_average}</span>
                    <span>Кількість голосів: {vote_count}</span>
                </div>

                <article className="moveminidetail-body-article">
                    {overview}
                </article>

            </div>
        </div>
    )
}