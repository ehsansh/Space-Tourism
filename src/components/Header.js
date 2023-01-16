import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.scss';

const Header = ({ active }) => {
    const liList = ['HOME', 'DESTINATION', 'CREW', 'TECHNOLOGY'];
    return (
        <header>
            <nav>
                <div className='logo'>
                    <img src={require('./images/logo.png')} alt='space logo' />
                </div>
                <div className='line'></div>
                <ul>
                    {liList.map((val, i) => (
                        <li key={i}>
                            <Link
                                className={active === val ? 'active' : ''}
                                to={`/${
                                    val !== 'HOME'
                                        ? val.toLocaleLowerCase()
                                        : ''
                                }`}
                            >
                                <span className='num'>0{i}</span>
                                <span className='text'>{val}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
