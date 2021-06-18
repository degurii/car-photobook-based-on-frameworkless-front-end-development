import applyDiff from './applyDiff'

const DEFAULT_COLOR = 'black';

const createDomElement = color => {
    const div = document.createElement('div');

    div.textContent = 'Hello World!!';
    div.style.color = color;
    return div;
};

export default class HelloWorld extends HTMLElement {
    static get observedAttributes () {
        return ['color'];
    };

    get color() {
        return this.getAttribute('color') || DEFAULT_COLOR;
    };

    set color(value) {
        this.setAttribute('color', value);
    };

    attributeChangedCallback(name, oldValue, newValue) {
        // 속성이 변경될 때마다 호출됨
        // observedAttributes 배열에 나열된 속성만 트리거한다
        if(!this.hasChildNodes()) {
            return;
        }

        applyDiff(this, this.firstElementChild, createDomElement(newValue));
    };

    connectedCallback() {
        window.requestAnimationFrame(() => {
            this.appendChild(createDomElement(this.color));
        });
    };
}