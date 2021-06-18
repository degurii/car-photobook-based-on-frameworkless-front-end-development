const DEFAULT_COLOR = 'black';

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
        if(!this.div) {
            return;
        }

        if(name === 'color') {
            this.div.style.color = newValue;
        }
    };

    connectedCallback() {
        window.requestAnimationFrame(() => {
            const div = document.createElement('div');
            div.style.color = this.color;
            div.textContent = 'Hello World!!';

            this.appendChild(div);
        });
    };
}