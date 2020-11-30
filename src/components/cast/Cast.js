import React from 'react';
import * as cn from './Cast.module.css';

export function Cast(props) {
    const {cast} = props;
    return (
        <div className={cn.cast}>
            <div className={cn.castHeader}>
                <div className={cn.castTitle}>Cast</div>
            </div>
            <div className={cn.castBar}>
                {cast.map((item) => {
                    if (!item.actorPhoto) {
                        return null;
                    }
                    return (
                        <div className={cn.castActor}>
                            <img className={cn.castPoster} src={item.actorPhoto} alt="" />
                            <p className={cn.castActorName}>{item.name}</p>
                            <p className={cn.castCharacterName}>{item.character}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
