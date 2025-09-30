
import { useGetAllGenresMoviesQuery } from '../../api/api';
import { useMoviesContext } from '../../context/moviesContext';
import type { PersonProjectType } from '../../interfaces/apiTypes';
import './PersonProject.scss';


export const PersonProject = ({ backdrop_path, genre_ids, id,
    media_type, original_language, original_title, overview, popularity,
    poster_path, release_date, title, vote_average, vote_count
}: PersonProjectType) => {

    const { renderGenresMovies } = useMoviesContext()
    const { data } = useGetAllGenresMoviesQuery()
    const genres = renderGenresMovies(genre_ids, data?.genres ?? [])


    return (
        <div className='project'>
            <div className='project-header'>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} />
                <h5>{title ?? 'Назву незабаром додадуть'}/{original_title ?? 'Назву незабаром додадуть'}</h5>
            </div>
           

        
        </div>

    )
}