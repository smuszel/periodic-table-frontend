const frameworks = [
    ['React', 'Ra', 'facebook'],
    ['Angular', 'Ng'],
    ['Aurelia', 'Au'],
    ['Ember.js', 'E', 'emberjs'],
    ['Mithril.js', 'Mh', 'mithriljs'],
    ['Backbone', 'Bc', 'jashkenas'],
    ['Preact', 'Pr', 'developit'],
    ['Vue', 'V', ''],
    ['Svelte', 'Sv', ''],
    ['Polymer', 'Pl'],
    ['Knockout', 'Ko', ''],
    ['Svelte', 'Sv', ''],
    ['Bootstrap', 'B', ''],
];

const tools = [
    ['Sass', 'Ss', ''],
    ['Less', 'Ls', ''],
    ['Stylus', 'Sy', ''],
    ['PostCSS', 'P', '']
];

const libraries = [
    ['jQuery', '$', ''],
    ['Redux', 'Rd', ''],
    ['Mootools', 'Mo', ''],
    ['D3', 'D', ''],
    ['Foundation', 'Fu', ''],
    ['Foundation', 'Fu', ''],
    ['Foundation', 'Fu', ''],
    ['Foundation', 'Fu', ''],
    ['Foundation', 'Fu', ''],
    ['Foundation', 'Fu', '']

];

const helper = type => ([name, title, author]) => ({
    name,
    title,
    author: author || name,
    type
})

export const techs = [
    ...frameworks.map(helper('framework')),
    ...libraries.map(helper('library')),
    ...tools.map(helper('tool'))
].map(t => ({
    ...t,
    home: `https://github.com/${t.author}/${t.name}`,
    icon: require(`../assets/${t.name}.svg`),
    stars: 123
}));

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