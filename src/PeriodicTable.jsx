import { techs } from './techs';
import React from 'react';
import Star from '../assets/star.svg';

export const PeriodicTable = () => {
    const techsElements = techs.map((t, ix) => (
        <div type={t.type} keyx={ix + 1} key={ix} className={`tech-element-container ${t.normName}`}>
            <span>
                <h1>{t.title}</h1>
                <t.icon.default />
            </span>
            <div>
                <h2>{t.name}</h2>
                <p> <Star />{t.stars}</p>
            </div>
        </div>));

    return (
        <div className="table-container">
            {techsElements}
            <div className="legend">
                <div framework=""><span></span>Frameworks</div>
                <div library=""><span></span>Libraries</div>
                <div tool=""><span></span>Tools</div>
            </div>
        </div>
)}