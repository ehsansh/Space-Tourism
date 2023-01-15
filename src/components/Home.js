import React from 'react';
import Header from './Header';
import './styles/Home.scss';
const Home = () => {
    return (
        <div className='Home'>
            <Header active='HOME' />
            <div>
                <h5>So, You want to travel to</h5>
                <h1>SPACE</h1>
                <p>
                    Let's face it: if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relaxe because we'll give you
                    a truly out of this world experience.
                </p>
            </div>
        </div>
    );
};

export default Home;
