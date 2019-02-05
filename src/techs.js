const frameworks = [
    ['React', 'Ra', 'facebook/%'],
    ['Angular', 'Ng', '%/%'],
    ['Aurelia', 'Au', '/framework'],
    ['Ember', 'E', '%js/%.js'],
    ['Mithril', 'Mh', '%js/%.js'],
    ['Backbone', 'Bc', 'jashkenas/%'],
    ['Preact', 'Pr', 'developit/%'],
    ['Vue', 'V', 'vuejs/%'],
    ['Svelte', 'Sv', '%js/%'],
    ['Polymer', 'Pl', '%/%'],
    ['Knockout', 'Ko', '%/%'],
    ['Bootstrap', 'B', 'twbs/%'],
    ['Jest', 'J', 'facebook/%'],
    ['Mocha', 'Mc', '%js/%'],
    ['Elm', 'El', '%/compiler']
];

const tools = [
    ['Sass', 'Ss', '%/%'],
    ['Less', 'Ls', '%/less.js'],
    ['Stylus', 'Sy', '%/%'],
    ['PostCSS', 'P', '%/%'],
    ['Typescript', 'Ts', 'microsoft/%'],
    ['Eslint', 'Et', '%/%'],
    ['Stylelint', 'St', '%/%'],
    ['Coffeescript', 'Cf', 'jashkenas/%'],
    ['Flow', 'F', 'facebook/%'],
    ['Npm', 'N', '%/%'],
    ['Yarn', 'Ya', '%pkg/%'],
    ['Gulp', 'Gu', '%js/%'],
    ['Brunch', 'Br', '%/%'],
    ['Grunt', 'Gr', '%js/%'],
    ['Karma', 'Kr', '%/%'],
    ['Instanbul', 'Ja', '%js/nyc'],
    ['Tape', 'Tp', 'substack/%'],
    ['Ava', 'A', '%js/%'],
    ['Phantom', 'Ph', 'ariya/%js'],
    ['Puppeteer', 'Pp', 'googlechrome/%'],
];

const libraries = [
    ['jQuery', 'Q', '%/%'],
    ['Redux', 'Rd', '%js/%'],
    ['Mootools', 'Mo', '%/%-core'],
    ['D3', 'D', '%/%'],
    ['Bluebird', 'Bl', 'petkaantonov/%'],
    ['Chai', 'Ch', '%js/%'],
    ['Sinon', 'Si', '%js/%'],
    // ['Foundation', 'Fu', '%/%'],

];

const helper = type => ([name, title, ghBase]) => {
    const normName = name.toLowerCase();
    const home = `https://github.com/${ghBase.replace('%', normName)}`;
    const icon = require(`../assets/${normName}.svg`);
    const stars = 123;

    return { name, normName, title, home, type, icon, stars };
};

export const techs = [
    ...frameworks.map(helper('framework')),
    ...libraries.map(helper('library')),
    ...tools.map(helper('tool'))
];

// export const techs = [

//     {
//         name: 'graphql',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
//     {
//         name: 'redux',
//         title: 'Rd',
//         stars: '46,622',
//         icon: require('../assets/redux.svg')
//     },
// ]