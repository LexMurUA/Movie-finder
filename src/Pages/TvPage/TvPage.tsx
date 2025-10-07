import { useParams } from 'react-router-dom';
import { useGetMovieOrTvDetailQuery } from '../../api/api';
import star from '../../assets/images/star.svg';
import { Loading } from '../../components/Loading/Loading';
import './TvPage.scss';


export const TvPage = () => {
  const { id } = useParams()

  const { data, isLoading } = useGetMovieOrTvDetailQuery({ id: Number(id), tvOrMovie: 'tv' })
  
  const { backdrop_path, created_by, first_air_date, genres, homepage, status, tagline, vote_average, vote_count,
    last_episode_to_air, name, networks, number_of_episodes, number_of_seasons,
    original_language, original_name, overview, popularity, poster_path, production_companies, production_countries, seasons
  } = data ?? {}
  
  isLoading && <Loading />

  return (
    <div className='container container-tv-page'>
      <div className='pantom'>

        <div className='container-tv-page-header'>
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_name} />
          <h3>{name}/{original_name}</h3>
        </div>
      </div>


      <div className='container-tv-page-body'>

        <div className='container-tv-page-body-info'>


          <div className='mini'>
            <span><b>Останній епізод: </b></span>
            <span>Дата: {last_episode_to_air?.air_date}</span>

            <span>Сезон: {last_episode_to_air?.season_number}</span>
            <img src={`https://image.tmdb.org/t/p/w500${last_episode_to_air?.still_path}`} alt={last_episode_to_air?.name} />
          </div>




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
            <span><b>Автор/и: </b></span>
            {created_by?.map((creator, idx) => (
              <span key={idx}>{creator.name}/{original_name}</span>
            ))}
          </div>

          <div className='mini'>
            <span><b>Дата релізу: </b></span>
            <span>{first_air_date}</span>
          </div>

          <div className='mini'>
            <span><b>Статус: </b></span>
            <span>{status}</span>
          </div>

          <div className='mini'>
            <span><b>Кількість серій: </b></span>
            <span>{number_of_episodes}</span>
          </div>

          <div className='mini'>
            <span><b>Офіційна сторінка: </b></span>
            <span><a href={homepage} target="_blank" rel="noopener noreferrer">Посилання...</a></span>
          </div>

          <div className='mini'>
            <span><b>Мова оригіналу: </b></span>
            <span>{original_language}</span>
          </div>

          <div className='mini'>
            <span><b>Гасло: </b></span>
            <span>{tagline}</span>
          </div>

          <div className='mini'>
            <span><b>Кількість сезонів: </b></span>
            <span>{number_of_seasons}</span>
          </div>

          <div className='seasons'>

            {seasons?.map((season, idx) => (
              <div className='seasons-view' key={idx}>

                {season.poster_path && <img src={`https://image.tmdb.org/t/p/w500${season.poster_path}`} alt={season.name} />}
                <span>{season.name}</span>

              </div>
            ))}
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
            <span>{vote_count}</span>Кількість голосів:28927
          </div>



        </div>



        <article className='container-tv-page-body-about'>
          <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="" />
          <p>{overview}</p>
          <div className='studios'>
            {production_companies?.map((studio, idx) => (
              <div className='studios-view' key={idx}>
                <img src={`https://image.tmdb.org/t/p/w500${studio.logo_path}`} alt="Logo" />
                <span>{studio.name}</span>

              </div>
            ))}
          </div>

          <div className='channels'>
            {networks?.map((studio, idx) => (
              <div className='channels-view' key={idx}>
                <img src={`https://image.tmdb.org/t/p/w500${studio.logo_path}`} alt={studio.name} />
                <span>{studio.name}</span>
              </div>
            ))}
          </div>

        </article>
      </div>


    </div>
  )
}


