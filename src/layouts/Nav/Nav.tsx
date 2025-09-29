import { Link } from 'react-router-dom';
import { useMoviesContext } from '../../context/moviesContext';
import './Nav.scss';
import { useEffect } from 'react';



export const Nav = () => {
    const { setContentType, setPopularOrTopRated,contenType, popularOrTopRated,location } = useMoviesContext()
    const { setTopMoviesPage } = useMoviesContext()


    const changeCategory = (tvOrMovie: 'tv' | 'movie'| 'person', topRatedOrPopular: 'top_rated' | 'popular') => {
        setContentType(tvOrMovie);
        setPopularOrTopRated(topRatedOrPopular)
    }

    
    useEffect(() => {
        
        setTopMoviesPage(1)
    }, [location.pathname])

    return (

        <nav className="container container-nav">


            <div className='container-nav-movies'>
                Фільми
                <div className='container-nav-movies-bar' >
                    <ul>
                        <li onClick={() => changeCategory('movie', 'top_rated')}><Link to='/moviesTopRated'>Найкращі фільми</Link>  </li>
                        <li onClick={() => changeCategory('movie', 'popular')}><Link to='/moviesPopular'>Популярні фільми</Link></li>
                    </ul>
                </div>

            </div>
            <div className='container-nav-tv'>
                Серіали
                <div className='container-nav-tv-bar'>
                    <ul>
                        <li onClick={() => changeCategory('tv', 'top_rated')}><Link to='/tvTopRated'>Найкращі серіали</Link></li>
                        <li onClick={() => changeCategory('tv', 'popular')}><Link to='/tvPopular'>Популярні серіали</Link></li>
                    </ul>


                </div>
            </div>

            <div className='container-nav-people'>
                Найпопулярніші люди
                <div className='container-nav-people-bar'>
                    <ul>
                        <li><Link to='/popularPersons'>Популярні персони</Link></li>
                    </ul>

                </div>

            </div>



        </nav>
    )
}