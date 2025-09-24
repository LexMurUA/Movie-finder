import type { MovieType } from "../../interfaces/api"


export const Movie = ({id,title,original_title,poster_path,popularity,
    original_language,release_date,overview,vote_average,vote_count
}:MovieType) => {


    return (
        <div key={id}>

            
                <h3>{title}/{original_title}</h3>
                <img src={poster_path} alt={title} />
                <span>Популярність: {popularity}</span>
                <span>Мова оригіналу: {original_language}</span>
                <span>Дата виходу: {release_date}</span>
                <span>Опис</span>
                <article>
                    {overview}
                </article>
                <span>Оцінка глядачів: {vote_average}</span>
                <span>Оцінка: {vote_count}</span>
            


        </div>
    )
}