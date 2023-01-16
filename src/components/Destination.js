import React from 'react';
import Header from './Header';

import './styles/Destination.scss';

const Destination = () => {
    return (
        <div className='Destination'>
            <Header active='DESTINATION' />
            <div className='container'>
                <div className='title'>
                    <h5>
                        <span className='num'>01</span>
                        PICK YOUR DESTINATION
                    </h5>
                </div>
                <section className='intro'>
                    <ul className='menu'>
                        <li className='active nav-text'>MOON</li>
                        <li className='nav-text'>EUROPA</li>
                        <li className='nav-text'>MARS</li>
                        <li className='nav-text'>TITAN</li>
                    </ul>
                    <h1>MOON</h1>
                    <p>
                        See our planet as you’ve never seen it before. A perfect
                        relaxing trip away to help regain perspective and come
                        back refreshed. While you’re there, take in some history
                        by visiting the Luna 2 and Apollo 11 landing sites.
                    </p>
                    <hr />
                    <div className='details'>
                        <div>
                            <div className='subheading2'>Average distance</div>
                            <div className='subheading1'>384,400 km</div>
                        </div>
                        <div>
                            <div className='subheading2'>est. travel time</div>
                            <div className='subheading1'>3 days</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Destination;
