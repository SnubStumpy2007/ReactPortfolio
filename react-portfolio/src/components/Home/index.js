import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import React, { useEffect, useState } from 'react'; // Import useState from React
import Logo from './Logo/index';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['l', '0', 'b', 'd', 'a', 'n']
    const jobArray = ['w', 'e', 'b', '', 'd','e','v','e','l','o','p','e','r', '.']


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    
        // Return a cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, []);
    

    return (
        <div className='container home-page'>
            <div className="text-zone">
                <h1> 
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br /> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    </h1>
                <img src={LogoTitle} alt='Developer' />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray} idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray} idx={22} />
            </div>
            <h2>Frontend Developer</h2>

            <Link to="/contact" className='flat-button'>Contact me</Link>
            <Logo />
        </div>
    )


}

export default Home