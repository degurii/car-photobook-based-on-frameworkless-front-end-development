import getTodos from './src/getTodos.js';
import todosView from './src/view/todos.js';
import counterView from './src/view/counter.js';
import filtersView from './src/view/filters.js';
import appView from './src/view/app.js';
import applyDiff from './src/applyDiff.js';

import registry from './src/registry.js';

registry.add('app', appView);
registry.add('todos', todosView);
registry.add('counter', counterView);
registry.add('filters', filtersView);

const state = {
    todos: getTodos(),
    currentFilter: 'All',
};

const render = () => {
    window.requestAnimationFrame(() => {
        const main = document.querySelector('#root');
        const newMain = registry.renderRoot(main, state);
        applyDiff(document.body, main, newMain);
    });
};

window.setInterval(() => {
    state.todos = getTodos();
    render();
}, 3000);