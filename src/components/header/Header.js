import React from "react";
import * as cn from "./Header.module.css";

export function Header(props) {
    const {numberOfFavMovies, searchMovies} = props;
    const [searchText, setSearchText] = React.useState("");

    function onClickSearchMovies(event) {
        event.preventDefault();
        searchMovies(searchText);
    }

    function onChangeSearchMovies (event) {
        setSearchText(event.target.value);
    }
    return (
        <div className={cn.header}>
            <div className={cn.user}>
                <div className={cn.headerIcon}><i className="fas fa-user"/></div>
                <div className={cn.headerText}>User</div>
            </div>
            <div className={cn.movies}>
                <div className={cn.headerIcon}>
                    <i className="fas fa-film"/>
                </div>
                <div className={cn.headerText}>
                    Movies On Your List: <span>{numberOfFavMovies}</span>
                </div>
            </div>

            <form onSubmit={onClickSearchMovies} className={cn.search}>
                <input onChange={onChangeSearchMovies} className={cn.searchInput} type="text"/>
                <div onClick={onClickSearchMovies} className={cn.searchIcon}>
                    <i className="fas fa-search"/>
                </div>
            </form>
        </div>
    )
}