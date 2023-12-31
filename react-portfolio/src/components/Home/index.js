import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import Sidebar from '../Sidebar'
import './index.scss'



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['t', 'y', 'p', 'i', 'n', 's', 'k', 'i'];
    const jobArray = ['w', 'e', 'b', '', 'd','e','v','e','l','o','p','e','r', '.'];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        return () => clearTimeout(timeoutId);
    }, []);
    
    return (
        <>
        <div className='container home-page'>
          <Sidebar />

            <div className="text-zone">
                <h1> 
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br /> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                </h1>
                <img src={LogoTitle} alt='Developer' className='logo-image' />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
            </div>
            {/* <h2>Frontend Developer</h2> */}
            {/* <Link to="/contact" className='flat-button'>About Me</Link> */}
            <Logo />
            
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Home;
