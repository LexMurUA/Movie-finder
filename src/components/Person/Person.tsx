import { Link } from 'react-router-dom';
import type { getPopularPersonsRes } from '../../interfaces/apiTypes';
import { PersonProject } from '../PersonProj/PersonProject';
import './Person.scss';


export const Person = ({ id, gender, known_for, known_for_department, name, original_name, popularity, profile_path }: getPopularPersonsRes) => {


  return (
    <Link to={`/person/${id}`}>
      <div className='person'>
        <div className='person-header'>
          <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />
          <span><b>Ім'я:</b> {name}/{original_name}</span>
          <span><b>Пол:</b> {gender}</span>
          <span><b>Відомий за жанром:</b> {known_for_department}</span>
          <span><b>Популярність:</b> {popularity}</span>
        </div>

        <div className='person-project'>
          {known_for.map(project => (
            <PersonProject key={project.id} {...project} />

          ))}
        </div>

      </div>
    </Link>
  )
}
