
import type { PersonProjectType } from '../../interfaces/apiTypes';
import './PersonProject.scss';


export const PersonProject = ({
    original_title,
    poster_path, title,
}: PersonProjectType) => {





    return (
        <div className='project'>
            <div className='project-header'>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} />
                <h5>{title ?? 'Назву незабаром додадуть'}/{original_title ?? 'Назву незабаром додадуть'}</h5>
            </div>



        </div>

    )
}