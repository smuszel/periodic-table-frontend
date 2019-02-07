const frameworks = [
    ['React', 'Ra', 'facebook/%'],
    ['Angular', 'Ng', '%/%'],
    ['Aurelia', 'Au', '%/framework'],
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
    ['Meteor', 'Mr', '%/%'],
    ['Next', 'Nx', 'zeit/%.js'],
    ['Stencil', 'Sc', 'ionic-team/%'],
    ['Phaser', 'Hs', 'photonstorm/%'],
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
    ['Istanbul', 'Ja', '%js/nyc'],
    ['Tape', 'Tp', 'substack/%'],
    ['Ava', 'A', '%js/%'],
    ['Phantom', 'Ph', 'ariya/%js'],
    ['Puppeteer', 'Pp', 'googlechrome/%'],
    ['Babel', 'Bl', '%/%'],
    ['Browserify', 'Bf', '%/%'],
    ['Bower', 'Bw', '%/%'],
    ['Jshint', 'Ht', '%/%'],
    ['Prepack', 'Pc', 'facebook/%'],
    ['Prettier', 'Pi', '%/%'],
    ['Webpack', 'Wp', '%/%'],
    ['Parcel', 'Pa', '%-bundler/%'],
    ['Fusebox', 'Fb', 'fuse-box/fuse-box'],
    ['Rollup', 'Rl', '%/%'],
    // ['Lodash', 'Si', '%js/%'],

];

const libraries = [
    ['jQuery', 'Jq', '%/%'],
    ['Redux', 'Rd', '%js/%'],
    ['Mootools', 'Mo', '%/%-core'],
    ['D3', 'D', '%/%'],
    ['Bluebird', 'Bl', 'petkaantonov/%'],
    ['Chai', 'Ch', '%js/%'],
    ['Sinon', 'Si', '%js/%'],
    ['Lodash', 'Lo', '%/%'],
    ['Underscore', 'U', 'jashkenas/%'],
    ['ReactiveX', 'Rx', 'Reactive-Extensions/RxJS'],
    ['Ramda', 'Rd', '%/%'],
    ['Kefir', 'Kf', '%js/%.js'],
    ['Bacon', 'Bc', '%js/%.js'],
    ['Moment', 'Mn', '%/%'],
    ['date-fns', 'Fn', '%/%'],
    ['Three', 'T', 'mrdoob/%.js'],
    ['Dragula', 'Dg', 'bevacqua/%'],
    ['Draggable', 'Dr', 'shopify/%'],
    ['Tensorflow', 'Tf', '%/tfjs-core'],
    ['Apollo', 'Al', '%graphql/%-client'],
    ['Mobx', 'Mx', '%js/%'],
    ['i18next', 'In', '%/%'],

];

const helper = type => ([name, title, ghBase]) => {
    const normName = name.toLowerCase();
    const home = `https://github.com/${ghBase.replace(/%/g, normName)}`;
    const icon = require(`../assets/${normName}.svg`);
    const stars = 123;

    return { name, normName, title, home, type, icon, stars };
};

export const techs = [
    ...frameworks.map(helper('framework')),
    ...tools.map(helper('tool')),
    ...libraries.map(helper('library')),
];