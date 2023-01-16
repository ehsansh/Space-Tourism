import React, { useState } from 'react';
import Header from './Header';
import './styles/Technology.scss';

import { technology } from './data/data';

const Technology = () => {
    const [currectTech, setCurrentTech] = useState('Launch vehicle');
    const [fade, setFade] = useState(false);
    let data = technology.filter(c => c.name === currectTech)[0];

    const changeTech = name => {
        setCurrentTech(name);
        // setFade(true);
    };

    return (
        <div className='Technology'>
            <Header active='TECHNOLOGY' />
            <div className='container'>
                <div className='text'>
                    <h1 className='step'>
                        <span className='num'>03</span>
                        Sapce launch 101
                    </h1>
                    <div className='content'>
                        <ul className='menu'>
                            {technology.map((t, i) => (
                                <li
                                    className={`${
                                        t.name === currectTech ? 'active' : ''
                                    }`}
                                    key={i}
                                    onClick={() => changeTech(t.name)}
                                >
                                    {i + 1}
                                </li>
                            ))}
                        </ul>
                        <section>
                            <div className='terminology'>
                                The terminology ...
                            </div>
                            <h3>{currectTech}</h3>
                            <p>{data.description}</p>
                        </section>
                    </div>
                </div>
                <div className='img'>
                    <img
                        src={require(`${data.images.portrait}`)}
                        alt={data.name}
                    />
                </div>
            </div>
        </div>
    );
};

export default Technology;
