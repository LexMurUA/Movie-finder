import { useGetAllGenresMoviesQuery } from "../../api/api";
import { useMoviesContext } from '../../context/moviesContext';
import type { MediaType } from "../../interfaces/apiTypes";
import './MovieMiniDetail.scss'
import star from '../../assets/images/star.svg'
export const MovieMiniDetail = ({ id, title, name, genre_ids, original_title, original_name, poster_path, popularity,
    original_language, release_date, first_air_date, overview, vote_average, vote_count
}: MediaType) => {
    const { renderGenresMovies } = useMoviesContext()
    const { data } = useGetAllGenresMoviesQuery()
    const genres = renderGenresMovies(genre_ids, data?.genres ?? [])



    return (
        <div className="moveminidetail" key={id}>
            <div className="moveminidetail-header">
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                <h3>{title ?? name}/{original_title ?? original_name}</h3>
            </div>
            <div className="moveminidetail-body">
                <div className="moveminidetail-body-info">
                    <p><b>Жанр:</b> {
                        genres.length === 0 ? <span>Категорія незабаром буде додана</span>
                            : (
                                genres.map((genre, idx) => (
                                    <span key={idx}>{genre}</span>
                                ))
                            )
                    }
                    </p>

                    <span><b> Рейтинг TMDB:</b><img src={star} alt="star" />{popularity}</span>
                    <span><b>Мова оригіналу:</b> {original_language}</span>
                    <span><b>Дата виходу:</b> {release_date ?? first_air_date}</span>
                    <span><b>Оцінка глядачів:</b> {vote_average}</span>
                    <span><b>Кількість голосів:</b> {vote_count}</span>
                </div>

                <article className="moveminidetail-body-article">
                    {overview}
                </article>

            </div>
        </div>
    )
}