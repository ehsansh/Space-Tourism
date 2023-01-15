import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './styles/Home.scss';
const Home = () => {
    return (
        <div className='Home'>
            <Header active='HOME' />
            <div className='container'>
                <div className='text'>
                    <h5>So, You want to travel to</h5>
                    <h1>SPACE</h1>
                    <p>
                        Let's face it: if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relaxe because
                        we'll give you a truly out of this world experience.
                    </p>
                </div>
                <div>
                    <Link className='explore-btn' to='/'>
                        EXPLORE
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
