import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './styles/Header.scss';

const Header = ({ active }) => {
    const liList = ['HOME', 'DESTINATION', 'CREW', 'TECHNOLOGY'];
    const [openMenu, setOpenMenu] = useState(false);

    let location = useLocation();
    useEffect(() => {
        if (window.innerWidth < 680) {
            setOpenMenu(false);
        }
    }, [location]);

    return (
        <header>
            <nav>
                <div className='logo'>
                    <img src={require('./images/logo.png')} alt='space logo' />
                </div>
                <hr className='line' />
                <div className='mobile-icon'>
                    <label
                        className={`menu-icon ${openMenu && 'openmenu'}`}
                        onClick={() => setOpenMenu(openMenu => !openMenu)}
                    >
                        <span className='navicon'></span>
                    </label>
                </div>

                {(window.innerWidth > 680 || openMenu) && (
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
                )}
            </nav>
        </header>
    );
};

export default Header;
