import React from 'react';
import * as cn from './Header.module.css';
import {Link} from 'react-router-dom';

export function Header(props) {
    const {numberOfFavMovies, searchMovies} = props;
    const [searchText, setSearchText] = React.useState('');

    function onClickSearchMovies(event) {
        event.preventDefault();
        searchMovies(searchText);
    }

    function onChangeSearchMovies(event) {
        setSearchText(event.target.value);
    }

    return (
        <div className={cn.header}>
            <div className={cn.user}>
                <div className={cn.headerIcon}>
                    <i className="fas fa-user" />
                </div>
                <div className={cn.headerText}>User</div>
            </div>
            <Link to="/favourites" className={cn.link}>
                <div className={cn.movies}>
                    <div className={cn.headerIcon}>
                        <i className="fas fa-heart" />
                    </div>
                    <div className={cn.headerText}>
                        Favourite Movies: <span>{numberOfFavMovies}</span>
                    </div>
                </div>
            </Link>
            <Link to="/" className={cn.link}>
                <div className={cn.movies}>
                    <div className={cn.headerIcon}>
                        <i className="fas fa-film" />
                    </div>
                    <div className={cn.headerText}>All Movies</div>
                </div>
            </Link>
            <form onSubmit={onClickSearchMovies} className={cn.search}>
                <input onChange={onChangeSearchMovies} className={cn.searchInput} type="text" />
                <div onClick={onClickSearchMovies} className={cn.searchIcon}>
                    <i className="fas fa-search" />
                </div>
            </form>
        </div>
    );
}
