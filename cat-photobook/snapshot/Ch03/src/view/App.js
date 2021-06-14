let template;

const createNewAppElement = () => {
    if (!template) {
        template = document.querySelector('#app');
    }
    return template.content.cloneNode(true);
}

const addLoading = targetElement => {
    const loadingElement = document.querySelector('#loading').content.firstElementChild.cloneNode(true);
    targetElement.appendChild(loadingElement);
};

const addImageViewer = (targetElement, state) => {
    const imageViewerElement = document.querySelector('#viewer').content.firstElementChild.cloneNode(true);
    const $img = imageViewerElement.querySelector('img');
    $img.src = state.imageViewer.path;
    $img.alt = `${state.imageViewer.name} image`;

    targetElement.appendChild(imageViewerElement);
};

const App = (targetElement, state, events) => {
    const newApp = targetElement.cloneNode(true);
    newApp.innerHTML = '';

    newApp.appendChild(createNewAppElement());

    if (state.isLoading) addLoading(newApp);
    if (state.imageViewer.status) addImageViewer(newApp, state);

    return newApp;
}

export default App;