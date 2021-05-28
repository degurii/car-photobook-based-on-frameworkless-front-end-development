import getTodos from './src/getTodos.js';
import todosView from "./src/view/todos";
import counterView from "./src/view/counter";
import filtersView from "./src/view/filters";

import registry from './src/registry.js';
import applyDiff from "./src/applyDiff";

registry.add('todos', todosView);
registry.add('counter', counterView);
registry.add('filters', filtersView);

const state = {
    todos: getTodos(),
    currentFilter: 'All',
};

//개선 전 render
// const render = () => {
//     const main = document.querySelector('.todoapp');
//     const newMain = registry.renderRoot(main, state);
//     main.replaceWith(newMain);
//     window.requestAnimationFrame(render);
// };

// 개선 후 render
const render = () => {
    window.requestAnimationFrame(() => {
        const main = document.querySelector('.todoapp');
        const newMain = registry.renderRoot(main, state);
        applyDiff(document.body, main, newMain);
    });
};

window.setInterval(() => {
    state.todos = getTodos();
    render();
}, 3000);