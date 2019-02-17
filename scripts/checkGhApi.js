require('dotenv').config({ path: '/etc/github-stats-table.env' });
const fetch = require('node-fetch');
const assert = require('assert')
const token = process.env.GH_TOKEN;
const headers = { Authorization: `token ${token}` };
const url = 'https://api.github.com/rate_limit';
const rateName = 'x-ratelimit-reset';

const main = async () => {
    assert(!!token);
    const response = await fetch(url, { headers }).then();
    [...response.headers.entries()].forEach(e => {
        const v = e[0] === rateName ? new Date(+e[1] * 1000) : e[1]; 
        console.log(e[0], v);
    })
}

main();