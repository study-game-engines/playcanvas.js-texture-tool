import './main.js';
import './style.scss';

import { version as textureToolVersion } from '../package.json';
// import { version as pcuiVersion } from 'pcui';
// import { version as engineVersion } from 'playcanvas';

const versions = [
    ['TextureTool', textureToolVersion]
    // ['Engine', engineVersion],
    // ['Pcui', pcuiVersion]
];

// print out versions of dependent packages
console.log(versions.map(entry => `${entry[0]} v${entry[1]}`).join(' '));
