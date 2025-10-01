import { useParams } from 'react-router-dom';
import { useGetMovieOrTvDetailQuery } from '../../api/api';
import star from '../../assets/images/star.svg';
import { Loading } from '../../components/Loading/Loading';
import './MoviePage.scss';

export const MoviePage = () => {



  const { id } = useParams()


  const { data, isLoading } = useGetMovieOrTvDetailQuery({ id: Number(id), tvOrMovie: 'movie' })
  const { budget, genres, title, original_language, status, tagline, original_title,
    vote_average, vote_count, runtime, overview, popularity,
    production_countries, production_companies, release_date, backdrop_path, poster_path
  } = data ?? {}


  isLoading && <Loading />

  return (
    <div className='container container-movie-page'>
      <div className='phantom'>
      <div className='container-movie-page-header'>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} />
        <h3>{title}/{original_title}</h3>
      </div>

      </div>
      
      <div className='container-movie-page-detail'>
        <div className='container-movie-page-detail-info'>
          <div className='mini'>
            <span><b>Жанр: </b></span>
            {genres?.map((category, idx) => (
              <span key={idx}>{category.name}</span>
            ))}
          </div>
          <div className='mini'>
            <span><b>Країна/ни виробник: </b></span>
            {production_countries?.map((country, idx) => (
              <span key={idx}>{country.name}</span>
            ))}
          </div>

          <div className='mini'>
            <span><b>Дата релізу: </b></span>
            <span>{release_date}</span>
          </div>

          <div className='mini'>
            <span><b>Бюджет: </b></span>
            <span>{budget}</span>
          </div>

          <div className='mini'>
            <span><b>Мова оригіналу: </b></span>
            <span>{original_language}</span>
          </div>

          <div className='mini'>
            <span><b>Cтатус: </b></span>
            <span>{status}</span>
          </div>

          <div className='mini'>
            <span><b>Гасло: </b></span>
            <span>{tagline}</span>
          </div>

          <div className='mini'>
            <span><b>Тривалість фільму: </b></span>
            <span>{runtime} хв.</span>
          </div>

          <div className='mini'>
            <span><b>Рейтинг TMDB:</b></span>
            <span><img src={star} alt="star" /> {popularity}</span>

          </div>

          <div className='mini'>
            <span><b>Оцінка глядачів:</b></span>
            <span>{vote_average}</span>
          </div>

          <div className='mini'>
            <span><b>Кількість голосів:</b></span>
            <span>{vote_count}</span>
          </div>

          <div className='logos'>
            {production_companies?.map((studio, idx) => (
              <div key={idx}>
                <img src={`https://image.tmdb.org/t/p/w500${studio.logo_path}`} alt="coming soon" />
                <span>{studio.name}</span>

              </div>
            ))}
          </div>

        </div>

        <article className='container-movie-page-detail-about'>
          <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="" />
          <p>{overview}</p>
        </article>
      </div>
    </div>
  )
}


