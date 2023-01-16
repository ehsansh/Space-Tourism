import React, { useState } from 'react';
import Header from './Header';
import './styles/Crew.scss';

import { crew } from './data/data';

const Crew = () => {
    const [currectCrew, setCurrentCrew] = useState('Douglas Hurley');
    const [fade, setFade] = useState(false);
    let data = crew.filter(c => c.name === currectCrew)[0];

    const changeCrew = name => {
        setCurrentCrew(name);
        setFade(true);
    };

    return (
        <div className='Crew'>
            <Header active='CREW' />
            <div className='container'>
                <div className='text'>
                    <h1 className='step'>
                        <span className='num'>02</span>
                        Meet your crew
                    </h1>
                    <h4>{data.role}</h4>
                    <h3>{data.name} </h3>
                    <p> {data.bio}</p>
                    <ul className='dots'>
                        {crew.map((val, i) => (
                            <li
                                key={i}
                                onClick={() => changeCrew(val.name)}
                                className={`${
                                    val.name === currectCrew ? 'active' : ''
                                }`}
                            ></li>
                        ))}
                    </ul>
                </div>
                <div
                    className={`img ${fade ? 'fade' : ''}`}
                    onAnimationEnd={() => setFade(false)}
                >
                    <img
                        width='100%'
                        src={require(`${data.images.png}`)}
                        alt={data.name}
                    />
                </div>
            </div>
        </div>
    );
};

export default Crew;
