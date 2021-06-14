import Node from '../components/Node.js';

const addClickEvents = (targetElement, state, events) => {
    targetElement.addEventListener('click', async e => {
        const clickedElement = e.target.closest('.Node');
        if (!clickedElement) return;

        events.activateLoading();

        const clickedIndex = Array
            .from(clickedElement.parentNode.children)
            .findIndex(elem => elem === clickedElement);

        const clicked = state.nodes[clickedIndex];
        if (clicked.type === 'FILE') {
            events.openFile(clicked);
        } else {
            await events.openDirectory(clicked);
        }

        events.deactivateLoading();
    });
}

const Nodes = (targetElement, state, events) => {
    const newNodes = targetElement.cloneNode(true);
    newNodes.innerHTML = '';

    state.nodes
        .map(node => Node(node))
        .forEach(elem => newNodes.appendChild(elem));

    addClickEvents(newNodes, state, events);

    return newNodes;
};

export default Nodes;