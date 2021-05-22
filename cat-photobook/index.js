import Breadcrumb from './src/view/Breadcrumb.js';
import Nodes from './src/view/Nodes.js';

import registry from './src/registry.js';
import applyDiff from './src/applyDiff.js';

registry.add('breadcrumb', Breadcrumb);
registry.add('nodes', Nodes);

let state = {
    currentPath: [],
    nodes: [],
};
console.log('hi');
const render = () => {
    const app = document.querySelector('.App');
    const newApp = registry.renderRoot(app, state);
    applyDiff(document.body, app, newApp);
    window.requestAnimationFrame(render);
}

window.requestAnimationFrame(render);