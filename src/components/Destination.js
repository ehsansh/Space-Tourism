import React, { useState } from 'react';
import Header from './Header';

import './styles/Destination.scss';

import { destinations } from './data/data';

console.log(destinations);

const Destination = () => {
    const [currectDestination, setCurrentDestination] = useState('Moon');

    let data = destinations.filter(d => d.name === currectDestination)[0];

    console.log(data);

    return (
        <div className='Destination'>
            <Header active='DESTINATION' />
            <div className='container'>
                <div className='title'>
                    <h1>
                        <span className='num'>01</span>
                        PICK YOUR DESTINATION
                    </h1>
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
                                onClick={() => setCurrentDestination(d.name)}
                            >
                                {d.name}
                            </li>
                        ))}
                    </ul>
                    <h2>{data.name}</h2>
                    <p>{data.description}</p>
                    <hr />
                    <div className='details'>
                        <div>
                            <div className='subheading2'>Average distance</div>
                            <div className='subheading1'>{data.distance}</div>
                        </div>
                        <div>
                            <div className='subheading2'>est. travel time</div>
                            <div className='subheading1'>{data.travel}</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Destination;
