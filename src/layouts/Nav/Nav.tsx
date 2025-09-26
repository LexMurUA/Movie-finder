import { Link } from 'react-router-dom';
import { useMoviesContext } from '../../context/moviesContext';
import './Nav.scss';



export const Nav = () => {
    const { setContentType } = useMoviesContext()


    return (

        <nav className="container container-nav">


            <div className='container-nav-movies'>
                Фільми
                <div className='container-nav-movies-bar' onClick={() => setContentType('movie')}><Link to='/moviesTopRated'>Найкращі фільми</Link></div>

            </div>
            <div className='container-nav-tv'>
                Серіали
            <div className='container-nav-tv-bar' onClick={() => setContentType('tv')}><Link to='/tvTopRated'>Найкращі серіали</Link></div>
                
            </div>

            <div>Найпопулярніші люди</div>
        </nav>
    )
}