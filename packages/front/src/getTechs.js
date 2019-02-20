const maxByDate = xs => xs.reduce((acc, x) => acc.date >= x.date ? acc : x, {});
const getDefault = () => import('./defaultTechs').then(t => t.default);

export default async apiurl => {
    const raw = await fetch(apiurl).then(r => r.json()).catch(getDefault);
    const processed = raw.map(t => {
        const latestHistoryEntry = maxByDate(t.history);
        
        return { ...t, ...latestHistoryEntry };
    });

    return processed;
};