import React, { useState } from 'react';
import Header from './Header';

import './styles/Destination.scss';

import { destinations } from './data/data';

const Destination = () => {
    const [currectDestination, setCurrentDestination] = useState('Moon');
    const [fade, setFade] = useState(false);

    let data = destinations.filter(d => d.name === currectDestination)[0];

    const changeDestination = val => {
        setCurrentDestination(val);
        setFade(true);
    };

    return (
        <div className='Destination'>
            <Header active='DESTINATION' />
            <div className='container'>
                <div className='title'>
                    <h1>
                        <span className='num'>01</span>
                        PICK YOUR DESTINATION
                    </h1>
                    <img
                        className={`${fade ? 'fade' : ''}`}
                        src={require(`${data.images.png}`)}
                        alt={data.name}
                    />
                </div>
                <section className='intro'>
                    <ul className='menu'>
                        {destinations.map((d, i) => (
                            <li
                                key={i}
                                className={`nav-text ${
                                    d.name === currectDestination
                                        ? 'active'
                                        : ''
                                }`}
                                onClick={() => changeDestination(d.name)}
                            >
                                {d.name}
                            </li>
                        ))}
                    </ul>
                    <div
                        className={`intro-content ${fade ? 'fade' : ''}`}
                        onAnimationEnd={() => setFade(false)}
                    >
                        <h2>{data.name}</h2>
                        <p>{data.description}</p>
                        <hr />
                        <div className='details'>
                            <div>
                                <div className='property'>Average distance</div>
                                <div className='value'>{data.distance}</div>
                            </div>
                            <div>
                                <div className='property'>est. travel time</div>
                                <div className='value'>{data.travel}</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Destination;
