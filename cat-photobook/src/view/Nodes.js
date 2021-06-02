import Node from '../components/Node.js';

const Nodes = (targetElement, {nodes}) => {
    const prev = {
        type: 'PREV',
    };

    const element = createNewNodesElement();

    const newNodes = targetElement.cloneNode(true);
    newNodes.appendChild(Node(prev));
    nodes
        .map(Node)
        .forEach(element => newNodes.appendChild(element));

    return newNodes;
};

export default Nodes;