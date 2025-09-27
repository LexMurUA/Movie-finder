import { Link } from 'react-router-dom';
import { useMoviesContext } from '../../context/moviesContext';
import './Nav.scss';



export const Nav = () => {
    const { setContentType, setPopularOrTopRated } = useMoviesContext()

    // const moviesTopRated = () => {
    //     setContentType('movie')
    //     setPopularOrTopRated('top_rated')
    // }
    // const tvTopRated = () => {
    //     setContentType('tv')
    //     setPopularOrTopRated('top_rated')
    // }
    // const moviesPopular = () => {
    //     setContentType('movie')
    //     setPopularOrTopRated('popular')
    // }
    // const tvPopular = () => {
    //     setContentType('tv')
    //     setPopularOrTopRated('popular')
    // }

    const changeCategory = (tvOrMovie: 'tv' | 'movie', topRatedOrPopular: 'top_rated' | 'popular')=>{
        setContentType(tvOrMovie);
        setPopularOrTopRated(topRatedOrPopular)

    }

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

            <div>Найпопулярніші люди</div>
        </nav>
    )
}