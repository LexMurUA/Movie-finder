import { useGetPopularPersonsQuery } from '../../api/api';
import { useMoviesContext } from '../../context/moviesContext';
import { Loading } from '../Loading/Loading';
import { Pagination } from '../Pagination/Pagination';
import { Person } from '../Person/Person';
import './PopularPersons.scss';



export const PopularPersons = () => {
  const {topMoviesPage} = useMoviesContext()
  const {data, isLoading} = useGetPopularPersonsQuery({page:topMoviesPage})
  const { results, total_pages, total_results } = data ?? {}
 
  
  
  
  isLoading && <Loading />

  return (
    <section className='container container-popular'>
      <ul>
        {results?.map(person=>(
          <li key={person.id}><Person {...person} /> </li>
        ))}
      </ul>

      <Pagination totalPages={Math.min(total_pages ?? 0, 500)} />

    </section>
  )
}

