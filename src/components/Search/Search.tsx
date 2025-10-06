import { useState } from 'react';
import './Search.scss';
import { useGetUserSearchQuery } from '../../api/api';
import { useDebounce } from '../../hooks/useDebounce';
import { Loading } from '../Loading/Loading';
import soon from '../../assets/images/soon.jpg';
import { Link } from 'react-router-dom';


export const Search = () => {
  const [searchValue, setSearchValue] = useState('')
  const debouncedValue = useDebounce(searchValue)
  const { data, isLoading } = useGetUserSearchQuery({ value: debouncedValue })
  const { results } = data ?? {}






  return (
    <section className='header-search'>

      <div className='header-search-panel'>
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='Пошук...' type="text" />
        {searchValue != '' && (
          <div className='header-search-panel-results'>
            {isLoading ? <Loading /> : (
              results?.map((result, idx) => (
                <div key={idx} className='header-search-panel-results-item'>
                  <Link to={result.media_type === 'movie' ? `/movie/${result.id}`:`/tv/${result.id}`}> 
                    <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== soon) {
                        target.src = soon;
                      }
                    }} alt='Foto' />
                    <span>{result.name ?? result.title}</span>
                    <span>{result.release_date ?? result.first_air_date}</span>
                  </Link>
                </div>
              ))
            )}
          </div>
        )}


      </div>
    </section>
  )
}

