import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss'

const Home = () => {
    return (
        <div className='container home-page'>
            <div className="text-zone">
                <h1>Hi, <br /> I'm </h1>
                <img src={LogoTitle} alt='Developer' />
                lobodon
                <br />
                web developer
            </div>
            <h2>Frontend Developer</h2>

            <Link to="/contact" className='flat-button'>Contact me</Link>
        </div>
    )


}

export default Home