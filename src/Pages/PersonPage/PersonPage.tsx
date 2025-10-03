import { Link, useParams } from 'react-router-dom';
import { useGetPersonDetailQuery, useGetPersonMoviesQuery, useGetPersonTvsQuery, useLazyGetPersonTvsQuery } from '../../api/api';
import { Loading } from '../../components/Loading/Loading';
import { useMoviesContext } from '../../context/moviesContext';
import './PersonPage.scss';
import { useState } from 'react';
import type { isShowControlType } from '../../interfaces/apiTypes';

export const PersonPage = () => {
  const { genderTranslator, } = useMoviesContext()
  const { id } = useParams()
  const [isShowProjects, setIsShowProjects] = useState(false)
  const [isShowSerials, setIsShowSerials] = useState(false)
  //Person movies view
  const { data: projects, isLoading: loadingProjects } = useGetPersonMoviesQuery({ id: Number(id) })
  const { cast } = projects ?? {}


  //Person TVS view
  const { data: tvs, isLoading: loadingSerials } = useGetPersonTvsQuery({ id: Number(id) })
  const { cast: serials } = tvs ?? {}


  //Person info view
  const { data, isLoading } = useGetPersonDetailQuery({ id: Number(id) })
  const { also_known_as, biography, birthday, deathday, gender,
    homepage, imdb_id, known_for_department, name, place_of_birth, popularity, profile_path
  } = data ?? {}
  const genderTranslate = gender !== undefined ? genderTranslator(gender) : "Невідомо";


  const isShowControl: isShowControlType = (value, changer) => {
    changer(!value)
  }

  isLoading && <Loading />




  return (
    <div className='identity'>
      <div className='phantom'>
        <div className='identity-header'>
          <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />
          <h3>Ім'я: {name}</h3>
          <span><b>Пол:</b>{genderTranslate}</span>
          <span><b>Відома завдяки:</b> {known_for_department}</span>
          <span><b>IMDB ID:</b> {imdb_id}</span>
          <span><b>Популярніcть:</b> {popularity}</span>
        </div>
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

        <div className='identity-biography-pannel'>
          <button onClick={() => isShowControl(isShowProjects, setIsShowProjects)}>Показати фільми {isShowProjects ? '-' : '+'}</button>
          <button onClick={() => isShowControl(isShowSerials, setIsShowSerials)}>Показати серіали {isShowSerials ? '-' : '+'}</button>
        </div>

        {isShowProjects && (
          <div className='identity-biography-projects'>
            {loadingProjects ? <Loading /> : (
              cast?.map(film => (
                <Link to={`/movie/${film.id}`}>
                  <div key={film.id} className='identity-biography-projects-icon'>
                    <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={'Зображення додається...'} />
                    <span>{film.title}</span>
                  </div>
                </Link>
              ))
            )}
          </div>

        )}



        {isShowSerials && (
          <div className='identity-biography-projects'>
            {loadingSerials ? <Loading /> : (
              serials?.map((serial) => (
                <Link to={`/tv/${serial.id}`}>
                  <div key={serial.id} className='identity-biography-tvs-icon'>
                    <img src={`https://image.tmdb.org/t/p/w500${serial.poster_path}`} alt={'Зображення додається...'} />
                    <span>{serial.original_name}</span>
                  </div>
                </Link>
              ))
            )}
          </div>
        )}

      </div>

    </div>

  )

}

