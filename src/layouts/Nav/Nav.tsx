import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import home from '../../assets/images/home.png';
import left from '../../assets/images/left-arrow.png';
import right from '../../assets/images/right-arrow.png';
import { useMoviesContext } from '../../context/moviesContext';
import './Nav.scss';


export const Nav = () => {
    const { setContentType, setPopularOrTopRated,  location, setSearchValue } = useMoviesContext()
    const { setTopMoviesPage, navigate } = useMoviesContext()


    const changeCategory = (tvOrMovie: 'tv' | 'movie' | 'person', topRatedOrPopular: 'top_rated' | 'popular') => {
        setContentType(tvOrMovie);
        setPopularOrTopRated(topRatedOrPopular)
    }


    useEffect(() => {

        setTopMoviesPage(1)
        setSearchValue('')
    }, [location.pathname])

    return (

        <nav className="container container-nav">
            <button onClick={() => navigate(-1)}> <img src={left} alt="left" /> </button>
            <button> <Link to='/'><img src={home} alt="On Main" /></Link>  </button>


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
            <button onClick={() => navigate(1)}> <img src={right} alt="right" /> </button>


        </nav>

    )
}