import { useMoviesContext } from '../../context/moviesContext';
import './Nav.scss';


export const Nav = () => {
    const { setContentType } = useMoviesContext()
    return (

        <nav className="container container-nav">

            <div onClick={() => setContentType('movie')}>Найпопулярніші фільми</div><div onClick={() => setContentType('tv')}>Найпопулярніші серіали</div><div>Найпопулярніші люди</div>
        </nav>
    )
}