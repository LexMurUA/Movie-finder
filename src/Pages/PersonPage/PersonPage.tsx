import { useParams } from 'react-router-dom';
import { useGetPersonDetailQuery, useGetPersonMoviesQuery } from '../../api/api';
import { Loading } from '../../components/Loading/Loading';
import { useMoviesContext } from '../../context/moviesContext';
import './PersonPage.scss';

export const PersonPage = () => {
  const { genderTranslator } = useMoviesContext()
  const { id } = useParams()

  const { data: projects, isLoading: loadingProjects } = useGetPersonMoviesQuery({ id: Number(id) })
  const { cast, crew } = projects ?? {}

  const { data, isLoading } = useGetPersonDetailQuery({ id: Number(id) })
  const { also_known_as, biography, birthday, deathday, gender,
    homepage, imdb_id, known_for_department, name, place_of_birth, popularity, profile_path
  } = data ?? {}
  const genderTranslate = gender !== undefined ? genderTranslator(gender) : "Невідомо";



  isLoading && <Loading />




  return (
    <div className='identity'>
      <div className='identity-header'>
        <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />
        <h3>Ім'я: {name}</h3>
        <span><b>Пол:</b>{genderTranslate}</span>
        <span><b>Відома завдяки:</b> {known_for_department}</span>
        <span><b>IMDB ID:</b> {imdb_id}</span>
        <span><b>Популярніcть:</b> {popularity}</span>
      </div>
      <div className='identity-info'>
        <span><b>Дата народження:</b> {birthday}</span>
        <span><b>Місце народження:</b> {place_of_birth}</span>
        <span><b>Дата смерті:</b> {deathday ? deathday : '-'}</span>
        <p><b>Псевдоніми:</b> {also_known_as?.map((nickname, idx) => (
          <span key={idx}><i>{nickname} </i></span>
        ))}
        </p>
      </div>
      <div className='identity-biography'>
        <article>
          <span><b>Біографія:</b></span>
          {biography ? biography : 'Незабаром буде додана'}
          <span><b>Сайт:</b> {homepage ? homepage : '-'}</span>
        </article>
        <div className='identity-biography-projects'>
        {loadingProjects ? <Loading />:(
          cast?.map(film=>(
            <div className='identity-biography-projects-icon'>
              <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={'Зображення додається...'} />
              <span>{film.title}</span>
            </div>
          ))
        )}
      </div>

      </div>

    </div>
  )
}


