import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['l', '0', 'b', 'd', 'a', 'n']
    const jobArray = ['w', 'e', 'b', '', 'd','e','v','e','l','o','p','e','r', '.']

    return (
        <div className='container home-page'>
            <div className="text-zone">
                <h1>Hi, <br /> I'm </h1>
                <img src={LogoTitle} alt='Developer' />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray} idx={15} />
                <br />
                web developer
            </div>
            <h2>Frontend Developer</h2>

            <Link to="/contact" className='flat-button'>Contact me</Link>
        </div>
    )


}

export default Home