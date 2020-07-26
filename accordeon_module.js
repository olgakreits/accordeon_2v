class accComponent {
    constructor(selector) {
        //array of trigger panels
        this.panels = Array.from(document.querySelectorAll(selector.panels));
        // array of hidden panels
        this.hidePanels = Array.from(document.querySelectorAll(selector.hidePanels));
        this.accordeon = document.querySelector(selector.accordeon);
        this.openIs = selector.openIs;
    }
    start() {
        this.panels.forEach((element, index) => {
            // event "when element clicked"
            element.addEventListener('click', () => {
                if (this.openIs == 'horizontal') {
                    this.horizontal(this.hidePanels[index], this.openIs);
                } else {
                    this.vertical(this.hidePanels[index]);
                }
            });
        });
    }
    hide(panel) {
        panel.classList.remove('show');
    }
    show(panel) {
        panel.classList.add('show');
    }
    vertical(elem) {
        if (elem.classList.contains('show')) {
            elem.style.height = '0';
            this.hide(elem);
        } else {
            elem.style.height = `${ elem.scrollHeight }px`;
            this.show(elem);
        }
        // automatic hiding of visible panels except the current one
        for (let value of this.hidePanels) {
            if (value !== elem) {
                value.style.height = '0';
                this.hide(value);
            }
        }
    }
    horizontal(elem, meth) {
        if (elem.classList.contains('show')) {
            elem.style.flexGrow = '0';
            this.hide(elem);
        } else {
            elem.style.flexGrow = '3';
            this.show(elem);
        }
        // automatic hiding of visible panels except the current one
        for (let value of this.hidePanels) {
            if (value !== elem) {
                value.style.flexGrow = '0';
                this.hide(value);
            }
        }
    }
}