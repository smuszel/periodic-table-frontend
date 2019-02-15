import _techs from './techs';
import React from 'react';
import Suspender from './Suspender';
import Star from './star.svg';

const _PeriodicTable = techs => {
    const techsElements = techs.map((t, ix) => (
        <a
            type={t.type}
            key={ix}
            href={t.home}
            target="blank"
            className={`tech-element-container ${t.normName}`}
        >
            <span>
                <h1>{t.title}</h1>
                <img src="" alt=""/>
                <t.icon.default className={`tech-icon ${t.normName}`} />
            </span>
            <div>
                <h2>{t.name}</h2>
                <p> <Star className="star" />{t.stars}</p>
            </div>
        </a>));

    return (
        <div className="table-container">
            {techsElements}
            <div className="legend">
                <div framework=""><span></span>Frameworks</div>
                <div library=""><span></span>Libraries</div>
                <div tool=""><span></span>Tools</div>
            </div>
        </div>
    );
};

const Loader = () => {
    return <div>loading...</div>
}

export const PeriodicTable = () => {
    return <Suspender main={_PeriodicTable} loader={Loader} pms={_techs} />
};