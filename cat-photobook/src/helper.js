export const getImagePath = filePath => {
    const path = filePath[0] === '/' ? filePath.slice(1) : filePath;
    return `https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public/${path}`;
}

export const getPrevNode = currentNode => ({
    id: currentNode.parent && currentNode.parent.id,
    name: 'prev',
    type: 'PREV',
    filePath: null,
    parent: null,
});

export const getRootNode = () => ({
    id: null,
    name: 'root',
    type: 'DIRECTORY',
    filePath: null,
    parent: null,
});