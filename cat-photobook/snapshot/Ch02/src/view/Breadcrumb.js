const Breadcrumb = (targetElement, {currentPath}) => {
    const newBreadcrumb = targetElement.cloneNode(true);
    newBreadcrumb.innerHTML = currentPath.map(path => '<div>' + path + '</div>');

    return newBreadcrumb
};

export default Breadcrumb;