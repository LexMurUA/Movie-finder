import { Link, useParams } from 'react-router-dom';
import './SearchPage.scss';
import { useGetUserSearchQuery } from '../../api/api';
import { Loading } from '../../components/Loading/Loading';
import soon from '../../assets/images/soon.jpg';
import { useMoviesContext } from '../../context/moviesContext';
import { Pagination } from '../../components/Pagination/Pagination';


export const SearchPage = () => {
  const { topMoviesPage } = useMoviesContext()
  const { value } = useParams()

  if (!value) return <Loading />
  const { data, isLoading, } = useGetUserSearchQuery({ value: value, page: topMoviesPage })
  const { results, total_results, total_pages, page } = data ?? {}







  return (
    <section className='container container-search'>
      <div className='container-search-page'>
        {results?.map((result, idx) => (
          <Link to={result.media_type === 'movie' ? `/movie/${result.id}` : `/tv/${result.id}`}>
            <div key={idx} className='container-search-page-item'>
              <span>{result.release_date ?? result.first_air_date}</span>
              {result.poster_path ? <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt='Foto' />:<img src={soon} alt='Foto' />}
              <span>{result.name ?? result.title}</span>
            </div>
          </Link>
        ))}
      </div>
      <Pagination totalPages={Math.min(data?.total_pages ?? 0, 500)} />
    </section>
  )
}
