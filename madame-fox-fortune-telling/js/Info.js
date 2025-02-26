import { Menu } from "./Menu.js";
import { Button } from "./Button.js";

export class Info extends Menu {
    constructor(main) {
        super(main);
        const innerHtml = 
        `<p class='menu-text'>Madame Fox welcomes you, and offers her services.
        Think of a <span class='bold'>Yes</span> or <span class='bold'>No</span> question
        and then press the <span class='bold'>Ask Button</span>.
        Using her mystical orb, she will answer the question you seek.
        </p>
        <button id='info-close-button' class='button' type='button'>Close</button>
        `;
        
        this.container = main.shadow.getElementById('info-container');
        this.info = main.shadow.getElementById('info');
        this.info.innerHTML = innerHtml;

        this.openButton = new InfoOpenButton(main);
        this.closeButton = new InfoCloseButton(main);
    }
}

class InfoOpenButton extends Button {
    constructor(main) {
        super(main);
        const innerHTML = 
        `
        <svg class='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
        </svg>
        `;
        this.button = main.shadow.getElementById('info-button');
        this.button.innerHTML = innerHTML;
        this.button.addEventListener('click', () => {
            this.toggleActiveClass();
            this.main.info.open();
        });
    }
}

class InfoCloseButton extends Button {
    constructor(main) {
        super(main);
        this.button = main.shadow.getElementById('info-close-button');
        this.button.addEventListener('click', () => {
            this.toggleActiveClass();
            this.main.info.close();
        });
    }
}