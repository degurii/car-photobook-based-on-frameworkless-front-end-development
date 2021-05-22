const Node = ({name, type}) => {
    const imgPath = {
        FILE: './assets/file.png',
        DIRECTORY: './assets/directory.png',
        PREV: './assets/prev.png',
    }
    return `
    <div class="Node">
        <img src="${imgPath[type]}" alt="${type} icon">
        ${type === 'PREV' ? '' : '<div>' + name + '</div>'}
    </div>
    `
};

export default Node;