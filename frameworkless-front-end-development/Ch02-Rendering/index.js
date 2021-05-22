import getTodos from './getTodos.js';
import todosView from "./view/todos";
import counterView from "./view/counter";
import filtersView from "./view/filters";

import registry from './registry.js';
import init from "../../utils/PerformenceMonitor";
import applyDiff from "./applyDiff";

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
    const main = document.querySelector('.todoapp');
    const newMain = registry.renderRoot(main, state);
    applyDiff(document.body, main, newMain);
    window.requestAnimationFrame(render);
};

window.requestAnimationFrame(render);

window.setInterval(() => {
    state.todos = getTodos();
}, 3000);