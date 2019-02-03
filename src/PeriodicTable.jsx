import { techs } from './techs';
import React from 'react';
import Star from '../assets/star.svg';

export const PeriodicTable = () => {
    const techsElements = techs.map((t, ix) => (
        <div key={ix} className="tech-element-container">
            <h1>{t.title}</h1>
            <t.icon.default width={100} />
            <h2>{t.name}</h2>
            <h3> <Star width={50} />{t.stars}</h3>
        </div>
    ));

    return (
    <div className="table-container">
        {techsElements}
    </div>
)}