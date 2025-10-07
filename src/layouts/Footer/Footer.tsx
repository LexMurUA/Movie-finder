import './Footer.scss';
import { Loading } from '../../components/Loading/Loading'
import insta from '../../assets/images/insta.gif'
import facebook from '../../assets/images/facebook.gif'
import youtube from '../../assets/images/icons8-youtube.gif'


export const Footer = () => {


    return (
        <footer className="container container-footer">
            <div className='container-footer-logo'>
                <Loading />
                <h1>Move-Finder</h1>
            </div>
            <div className='container-footer-webs'>
                <div className='container-footer-webs-icons'>
                    <img src={insta} alt="" />
                    <img src={facebook} alt="" />
                    <img src={youtube} alt="" />
                </div>
                <ul className='container-footer-webs-info'>
                    <li><span>Контакти</span></li>
                    <li><span>Кінотеатр</span></li>
                    <li><span>Кінотеатр</span></li>
                </ul>
                <div><span>© 2025 — © All rights reserved.</span></div>
            </div>
        </footer>
    )
}