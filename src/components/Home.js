import React from 'react';
import Header from './Header';
import './styles/Home.scss';
const Home = () => {
    return (
        <div className='Home'>
            <Header active='HOME' />
            <div>
                <h1>Space</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Provident, asperiores!
                </p>
                <h5>this is h5</h5>
            </div>
        </div>
    );
};

export default Home;
