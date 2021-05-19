const filtersView = (targetElement, {currentFilter}) => {
    const newCounter = targetElement.cloneNode(true);
    Array
        .from(newCounter.querySelector('li a'))
        .forEach(a => {
            if (a.textContent === currentFilter) {
                a.classList.add('selected');
            } else {
                a.classList.remove('selected')
            }
        });

    return newCounter;
};

export default filtersView;