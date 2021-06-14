import App from './src/view/App.js';
import Breadcrumb from './src/view/Breadcrumb.js';
import Nodes from './src/view/Nodes.js';

import registry from './src/registry.js';
import applyDiff from './src/applyDiff.js';

import api from './src/api.js';
import { getImagePath, getRootNode, getPrevNode } from './src/helper.js';

registry.add('app', App);
registry.add('breadcrumb', Breadcrumb);
registry.add('nodes', Nodes);

const state = {
    path: [],
    nodes: [],
    imageViewer: {
        status: false,
        path: null,
        name: null,
    },
    isLoading: true,
};

const events = {
    openDirectory: async node => {
        const loadedNodes = await api.getDirectoryNodes(node.id);
        state.nodes = [];

        if (node.name === 'prev') {
            state.path.pop();
        } else {
            state.path.push(node);
        }

        if (node.id !== null) {
            const lastDirectory = state.path[state.path.length - 1];
            const prev = getPrevNode(lastDirectory);
            state.nodes.push(prev);
        }
        state.nodes = [...state.nodes, ...loadedNodes];

        render();
    },
    openFile: node => {
        state.imageViewer = {
            status: true,
            path: getImagePath(node.filePath),
            name: node.name,
        };
        render();
    },
    closeFile: () => {
        state.imageViewer = {
            status: false,
            path: null,
            name: null,
        };
        render();
    },
    activateLoading: () => {
        state.isLoading = true;
        render();
    },
    deactivateLoading: () => {
        state.isLoading = false;
        render();
    },
};

const render = () => {
    window.requestAnimationFrame(() => {
        const app = document.querySelector('#root');
        const newApp = registry.renderRoot(app, state, events);
        applyDiff(document.body, app, newApp);
    });
}

(async function init() {
    events.activateLoading();
    await events.openDirectory(getRootNode());
    events.deactivateLoading();
})();
