import App from './src/view/App.js';
import Breadcrumb from './src/view/Breadcrumb.js';
import Nodes from './src/view/Nodes.js';

import registry from './src/registry.js';
import applyDiff from './src/applyDiff.js';

import api from './src/api.js';

registry.add('app', App);
registry.add('breadcrumb', Breadcrumb);
registry.add('nodes', Nodes);

const state = {
    path: [],
    nodes: [],
};

const rootNode = {
    id: null,
    name: 'root',
    type: 'DIRECTORY',
    filePath: null,
    parent: null,
};

const render = () => {
    window.requestAnimationFrame(() => {
        const app = document.querySelector('#root');
        const newApp = registry.renderRoot(app, state);
        applyDiff(document.body, app, newApp);
    });
}

(async function init() {
    state.nodes = Array.from(await api.getDirectoryNodes());
    state.path.push(rootNode);
    render();
})();

