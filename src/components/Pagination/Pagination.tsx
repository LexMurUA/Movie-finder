import { useMoviesContext } from '../../context/moviesContext'
import type { PaginationProps } from '../../interfaces/components'
import { PageButton } from './PageButton'
import './Pagination.scss'


export const Pagination = ({ totalPages }: PaginationProps) => {
  const { topMoviesPage, setTopMoviesPage } = useMoviesContext()



  return (
    <div className='pagination'>
      <div className='pagination-points'>
        <PageButton page={1} current={topMoviesPage} onClick={setTopMoviesPage} />
        {
          topMoviesPage != 1 && topMoviesPage != totalPages ? (
            <>
              {topMoviesPage - 1 === 1 ? '' : (
                <>
                  <span>...</span>
                  <PageButton page={topMoviesPage - 1} current={topMoviesPage} onClick={setTopMoviesPage} />
                </>)}
              <PageButton page={topMoviesPage} current={topMoviesPage} onClick={setTopMoviesPage} />
              {topMoviesPage + 1 === totalPages ? '' : (
                <>
                  <PageButton page={topMoviesPage + 1} current={topMoviesPage} onClick={setTopMoviesPage} />
                  <span>...</span>
                </>)}
            </>
          ) :
            (<span>...</span>)
        }
        <PageButton page={totalPages} current={topMoviesPage} onClick={setTopMoviesPage} />
      </div>
      
      <div className='pagination-buttons'>
        <button
          disabled={topMoviesPage === 1}
          onClick={() => setTopMoviesPage(prev => prev - 1)}
        >Back</button>
        <button
          disabled={topMoviesPage === totalPages}
          onClick={() => setTopMoviesPage(prev => prev + 1)}
        >Next</button>
      </div>
    </div>
  )
}
