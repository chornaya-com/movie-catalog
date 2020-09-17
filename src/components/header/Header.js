import React from "react";
import * as cn from "./Header.module.css";

export function Header() {

    return (
        <div className={cn.header}>
            <div className={cn.user}>
                <div className={cn.headerIcon}><i className="fas fa-user"></i></div>
                <div className={cn.headerText}>User</div>
            </div>
            <div className={cn.movies}>
                <div className={cn.headerIcon}>
                    <i className="fas fa-film"></i>
                </div>
                <div className={cn.headerText}>
                    Your Movie List
                </div>
            </div>

            <div className={cn.search}>
                <input className={cn.searchInput} type="text"/>
                <div className={cn.searchIcon}>
                    <i className="fas fa-search"></i>
                </div>

            </div>
        </div>
    )
}