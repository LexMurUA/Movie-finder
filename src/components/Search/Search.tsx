import { useState } from 'react';
import './Search.scss';
import { useGetUserSearchQuery } from '../../api/api';
import { useDebounce } from '../../hooks/useDebounce';
import { Loading } from '../Loading/Loading';
import soon from '../../assets/images/soon.jpg';
import { Link, Navigate } from 'react-router-dom';
import { useMoviesContext } from '../../context/moviesContext';
import type { searchEnterType } from '../../interfaces/mainTypes';
import x from '../../assets/images/X.svg'

export const Search = () => {
  const {searchValue , setSearchValue, navigate} = useMoviesContext()
  const debouncedValue = useDebounce(searchValue)
  const { data, isLoading } = useGetUserSearchQuery({ value: debouncedValue })
  const { results,total_results } = data ?? {}

  const quantityOfView = results && results?.length <= 14 ? results.length : 14


  const searchEnter:searchEnterType = (e,searchValue)=>{
    if(searchValue === '')return;
    if (e.key === 'Enter'){
      navigate(`/search/${searchValue}`)
    }

  }

  return (
    <section className='header-search'>

      <div className='header-search-panel'>
        <input onKeyDown={(e)=>searchEnter(e,debouncedValue)} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='Пошук...' type="text" />
        {searchValue != '' && (
          <div className='header-search-panel-results'>
            {isLoading ? <Loading /> : (
              results?.slice(0, quantityOfView).map((result, idx) => (
                <div key={idx} className='header-search-panel-results-item'>
                  <Link to={result.media_type === 'movie' ? `/movie/${result.id}` : `/tv/${result.id}`}>
                    <span>{result.release_date ?? result.first_air_date}</span>
                    <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== soon) {
                        target.src = soon;
                      }
                    }} alt='Foto' />
                    <span>{result.name ?? result.title}</span>
                  </Link>
                </div>
                
              ))
             
            )}
            <div className='header-search-panel-bar'><div>Загальна кількість: <span>{total_results}</span></div>
              <div><button><Link to={`search/${debouncedValue}`}>Усі результати</Link></button></div><img src={x} alt="x" onClick={()=>setSearchValue('')} /> </div>
             
          </div>
        )}


      </div>
    </section>
  )
}

// results && results?.length > 14 ? results?.slice(0, 14)