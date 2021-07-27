import React from 'react';
import './Home.scss';

import { RiMovie2Fill } from 'react-icons/ri';
import { MdLocalMovies } from 'react-icons/md';

import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <Link to="/series">
                <div className="home__card">
                    <RiMovie2Fill className="home__icon" />
                    <p>Popular Series</p>
                </div>
            </Link>
            <Link to="/movies">
                <div className="home__card">
                    <MdLocalMovies className="home__icon" />
                    <p>Popular Movies</p>
                </div>
            </Link>
        </div>
    );
}

export default Home;