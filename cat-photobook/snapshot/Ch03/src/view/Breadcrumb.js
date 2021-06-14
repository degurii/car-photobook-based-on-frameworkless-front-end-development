const BreadcrumbNode = (node) => {
    const newBreadcrumbNode = document.createElement('div');
    newBreadcrumbNode.textContent = node.name;

    return newBreadcrumbNode;
}

const Breadcrumb = (targetElement, state) => {
    const newBreadcrumb = targetElement.cloneNode(true);
    newBreadcrumb.innerHTML = '';

    const {path} = state;
    path
        .map(node => BreadcrumbNode(node))
        .forEach(elem => newBreadcrumb.appendChild(elem));

    return newBreadcrumb;
}

export default Breadcrumb;