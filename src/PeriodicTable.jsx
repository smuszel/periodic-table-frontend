import { techs } from './techs';
import React from 'react';
import Star from '../assets/star.svg';

export const PeriodicTable = () => {
    const techsElements = techs.map((t, ix) => (
        <div key={ix} className={t ? 'tech-element-container' : 'empty'}>
            {t && (<>
                <span>
                    <h1>{t.title}</h1>
                    <t.icon.default />
                </span>
                <div>
                    <h2>{t.name}</h2>
                    <p> <Star />{t.stars}</p>
                </div></>
            )}
        </div>));

    return (
    <div className="table-container">
        {techsElements}
    </div>
)}