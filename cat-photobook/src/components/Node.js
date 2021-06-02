let template;

const createNewNodeElement = () => {
    if (!template) {
        template = document.getElementById('node');
    }
    return template.content.firstElementChild.cloneNode(true);
}

const Node = ({name, type}) => {
    const iconPath = `./assets/${type.toLowerCase()}.png`;

    const element = createNewNodeElement();
    const $img = element.querySelector('img');
    $img.src = iconPath;
    $img.alt = `${type} icon`;

    if(name !== 'PREV') {
        const $name = document.createElement('div');
        $name.textContent = name;
        element.appendChild($name);
    }

    return element;
};

export default Node;