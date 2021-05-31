const Node = ({name, type}) => {
    const iconPath = `./assets/${type.toLowerCase()}.png`;
    return `
    <div class="Node">
        <img src="${iconPath}" alt="${type} icon">
        ${type === 'PREV' ? '' : '<div>' + name + '</div>'}
    </div>
    `
};

export default Node;