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
            className={`tech-element-container`}
        >
            <span>
                <h1>{t.symbolicTitle}</h1>
            </span>
            <div>
                <h2>{t.normName}</h2>
                <p> <Star className="star" />{t.stars}</p>
            </div>
        </a>));

    return (
        <div className="table-container">
            {techsElements}
            <legend>
                <label className="framework"><span></span>Frameworks</label>
                <label className="library"><span></span>Libraries</label>
                <label className="tool"><span></span>Tools</label>
            </legend>
        </div>
    );
};

const Loader = () => {
    return <div>loading...</div>
}

export default () => {
    return <Suspender main={_PeriodicTable} loader={Loader} pms={_techs} />
};