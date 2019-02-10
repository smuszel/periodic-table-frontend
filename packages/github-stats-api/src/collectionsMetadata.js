const getDynamicInfo = require('./getDynamicInfo');
const initialRepos = require('../seed/initial.json').repos;

module.exports = {
    main: { name: 'repos_main', init: initialRepos },
    dynamic: { name: 'repos_di', init: initialRepos.map(getDynamicInfo) },
    errors: { name: 'repos_err' }
};