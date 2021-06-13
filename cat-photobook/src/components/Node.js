let template;
const createNewNodeElement = () => {
    if (!template) {
        template = document.querySelector('#node');
    }
    return template.content.cloneNode(true);
}
const Node = node => {
    const iconPath = `./assets/${node.type.toLowerCase()}.png`;

    const newNode = createNewNodeElement().firstElementChild;
    const $img = newNode.querySelector('img');
    $img.src = iconPath;
    $img.alt = `${node.type} icon`;

    if (node.type !== 'PREV') {
        const $name = document.createElement('div');
        $name.textContent = node.name;

        newNode.appendChild($name);
    }

    return newNode;
}

export default Node;