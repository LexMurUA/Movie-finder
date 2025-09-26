import { Link } from 'react-router-dom';
import { useMoviesContext } from '../../context/moviesContext';
import './Nav.scss';



export const Nav = () => {
    const { setContentType, setPopularOrTopRated } = useMoviesContext()

    const moviesTopRated = () => {
        setContentType('movie')
        setPopularOrTopRated('top_rated')
    }
    const tvTopRated = () => {
        setContentType('tv')
        setPopularOrTopRated('top_rated')
    }
    const moviesPopular = () => {
        setContentType('movie')
        setPopularOrTopRated('popular')
    }
    const tvPopular = () => {
        setContentType('tv')
        setPopularOrTopRated('popular')
    }

    return (

        <nav className="container container-nav">


            <div className='container-nav-movies'>
                Фільми
                <div className='container-nav-movies-bar' >
                    <ul>
                        <li onClick={moviesTopRated}><Link to='/moviesTopRated'>Найкращі фільми</Link>  </li>
                        <li onClick={moviesPopular}><Link to='/moviesPopular'>Популярні фільми</Link></li>
                    </ul>
                </div>

            </div>
            <div className='container-nav-tv'>
                Серіали
                <div className='container-nav-tv-bar'>
                    <ul>
                        <li onClick={tvTopRated}><Link to='/tvTopRated'>Найкращі серіали</Link></li>
                        <li onClick={tvPopular}><Link to='/tvPopular'>Популярні серіали</Link></li>
                    </ul>


                </div>
            </div>

            <div>Найпопулярніші люди</div>
        </nav>
    )
}