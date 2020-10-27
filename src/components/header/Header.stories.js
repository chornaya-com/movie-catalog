import React from 'react';
import {Header} from './Header';
import {BrowserRouter as Router} from 'react-router-dom';

export default {
    title: 'Header',
};

export const HeaderComponent = () => {
    const searchMovies = (text) => {
        console.log(text);
    };

    return (
        <Router>
            <Header numberOfFavMovies={55} searchMovies={searchMovies} />
        </Router>
    );
};
