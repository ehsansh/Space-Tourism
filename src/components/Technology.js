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
        setFade(true);
    };

    let src =
        window.innerWidth > 2000 ? data.images.portrait : data.images.landscape;

    return (
        <div className='Technology'>
            <Header active='TECHNOLOGY' />
            <h1 className='step'>
                <span className='num'>03</span>
                Sapce launch 101
            </h1>
            <div className='container'>
                <div className='text'>
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
                <div
                    className={`img ${fade ? 'fade' : ''}`}
                    onAnimationEnd={() => setFade(false)}
                >
                    <img src={require(`${src}`)} alt={data.name} />
                </div>
            </div>
        </div>
    );
};

export default Technology;
