const filtersView = (targetElement, {currentFilter}, {changeFilter}) => {
    const newFilters = targetElement.cloneNode(true);
    Array
        .from(newFilters.querySelector('li a'))
        .forEach(a => {
            if (a.textContent === currentFilter) {
                a.classList.add('selected');
            } else {
                a.classList.remove('selected')
            }

            a.addEventListener('click', e => {
                e.preventDefault();
                changeFilter(a.textContent);
            });
        });

    return newFilters;
};

export default filtersView;