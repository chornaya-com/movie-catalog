import React from 'react';
import * as cn from './Recommendations.module.css';
import {Link} from 'react-router-dom';

export function Recommendations(props) {
    const {recommendations} = props;
    return (
        <div className={cn.recommendations}>
            <div className={cn.recommendationsHeader}>
                <div className={cn.recommendationsTitle}>Recommendations</div>
            </div>
            <div className={cn.recommendedFilmsBar}>
                {recommendations.map((item) => {
                    return (
                        <Link to={`/movie/${item.id}`} key={item.id} className={cn.link}>
                            <div className={cn.recommendedFilm}>
                                <img
                                    className={cn.recommendedFilmPoster}
                                    src={item.recommendationPoster}
                                    alt=""
                                />
                                <p className={cn.recommendedFilmTitle}>{item.title}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
