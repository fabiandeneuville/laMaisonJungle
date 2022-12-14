import '../styles/Banner.css';
import logo from '../assets/logo.png';
import Recommendation from './Recommendation';

function Banner(){

    const title = 'La Maison Jungle'

    return (
        <div className="lmj-banner">
            <img src={logo} alt="Logo de la Maison Jungle" className='lmj-logo'/>
            <h1 className='lmj-title'>{ title }</h1>
            <Recommendation/>
        </div>
    )
}

export default Banner