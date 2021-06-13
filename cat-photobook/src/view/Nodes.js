import Node from '../components/Node.js';

const Nodes = (targetElement, state) => {
    const newNodes = targetElement.cloneNode(true);
    newNodes.innerHTML = '';

    const { path, nodes } = state;
    const currentNodes = [...nodes];
    if (path.length > 1) {
        const currentDirectory = path[path.length - 1];
        const prev = {
            id: currentDirectory.parent?.id,
            name: 'prev',
            type: 'PREV',
            filePath: null,
            parent: null,
        }
        currentNodes.unshift(prev);
    }

    currentNodes
        .map(node => Node(node))
        .forEach(elem => newNodes.appendChild(elem));

    return newNodes;
};

export default Nodes;