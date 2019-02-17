const maxByDate = xs => xs.reduce((acc, x) => acc.date >= x.date ? acc : x, {});

export default (async () => {
    const raw = await fetch(__webpack_provide.apiUrl).then(r => r.json());
    const processed = raw.map(t => {
        const latestHistoryEntry = maxByDate(t.history);
        
        return { ...t, ...latestHistoryEntry };
    });

    return processed;
})();