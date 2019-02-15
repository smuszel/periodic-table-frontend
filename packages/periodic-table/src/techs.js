const apiUrl = '';
const maxBy = xs => xs.reduce((acc, x) => acc.date >= x.date ? acc : xs, {});

export default fetch(apiUrl)
    .then(r => r.json())
    .then(r => r.techs.map(t => ({ ...t, ...maxBy(t.history) })))
    ;