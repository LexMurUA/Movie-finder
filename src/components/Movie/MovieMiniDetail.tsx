import { useGetAllGenresMoviesQuery } from "../../api/api";
import { useMoviesContext } from '../../context/moviesContext';
import type { MovieType } from "../../interfaces/apiTypes";


export const MovieMiniDetail = ({ id, title, genre_ids, original_title, poster_path, popularity,
    original_language, release_date, overview, vote_average, vote_count
}: MovieType) => {
    const { renderGenresMovies } = useMoviesContext()
    const { data } = useGetAllGenresMoviesQuery()
    const genres = renderGenresMovies(genre_ids, data?.genres ?? [])



    return (
        <div key={id}>
            <h3>{title}/{original_title}</h3>
            <img src={poster_path} alt={title} />
            <span>Рейтинг TMDB: {popularity}</span>
            <span>Мова оригіналу: {original_language}</span>
            <span>Дата виходу: {release_date}</span>
            <span>Опис</span>
            <p>Жанр {genres.map(genre => (
                <span>{genre}</span>
            ))}</p>
            <article>
                {overview}
            </article>
            <span>Оцінка глядачів: {vote_average}</span>
            <span>Кількість голосів: {vote_count}</span>
        </div>
    )
}