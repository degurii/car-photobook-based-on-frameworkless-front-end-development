import Node from '../components/Node.js';

const Nodes = (targetElement, {nodes}) => {
    const prev = {
        type: 'PREV',
    };

    const newNodes = targetElement.cloneNode(true);
    const nodesElements = Node(prev) + nodes.map(Node).join('');
    newNodes.innerHTML = nodesElements;

    return newNodes;
};

export default Nodes;