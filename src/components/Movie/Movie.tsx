import { useGetAllGenresMoviesQuery } from "../../api/api"
import type { MovieType } from "../../interfaces/api"


export const Movie = ({id,title,genre_ids,original_title,poster_path,popularity,
    original_language,release_date,overview,vote_average,vote_count
}:MovieType) => {
    const {data}=useGetAllGenresMoviesQuery()

    return (
        <div key={id}>

            
                <h3>{title}/{original_title}</h3>
                <img src={poster_path} alt={title} />
                <span>Рейтинг TMDB: {popularity}</span>
                <span>Мова оригіналу: {original_language}</span>
                <span>Дата виходу: {release_date}</span>
                <span>Опис</span>
                <span>Жанр {}</span>
                <article>
                    {overview}
                </article>
                <span>Оцінка глядачів: {vote_average}</span>
                <span>Оцінка: {vote_count}</span>
            


        </div>
    )
}