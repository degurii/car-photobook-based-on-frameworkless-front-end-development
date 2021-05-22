const Node = ({name, type}) => {
    const imgPath = {
        file: './assets/file.png',
        dir: './assets/directory.png',
        prev: './assets/prev.png',
    }
    return `
    <div class="Node">
        <img src="${imgPath[type]}" alt="${type} icon">
        ${type === 'prev' ? '' : '<div>' + name + '</div>'}
    </div>
    `
};

export default Node;