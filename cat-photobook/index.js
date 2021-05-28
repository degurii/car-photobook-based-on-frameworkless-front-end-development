import Breadcrumb from './src/view/Breadcrumb.js';
import Nodes from './src/view/Nodes.js';

import registry from './src/registry.js';
import applyDiff from './src/applyDiff.js';

registry.add('breadcrumb', Breadcrumb);
registry.add('nodes', Nodes);

const state = {
    currentPath: [],
    nodes: [],
};

const render = () => {
    window.requestAnimationFrame(() => {
        const app = document.querySelector('.App');
        const newApp = registry.renderRoot(app, state);
        applyDiff(document.body, app, newApp);
    });
}

(async function init(){
    const response = await fetch('https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev');
    state.nodes = await response.json();
    state.currentPath = ['root'];
    render();
}())
