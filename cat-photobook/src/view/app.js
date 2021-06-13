let template;

const createNewAppElement = () => {
    if (!template) {
        template = document.querySelector('#app');
    }
    return template.content.cloneNode(true);
}

const App = targetElement => {
    const newApp = targetElement.cloneNode(true);
    newApp.innerHTML = '';

    newApp.appendChild(createNewAppElement());
    return newApp;
}

export default App;