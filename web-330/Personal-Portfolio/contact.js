class Contact extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="contact">
                <p>mchristm19@gmail.com</p>&nbsp;<p>011-001-1999</p>&nbsp;<p>Kenosha, WI</p>&nbsp;<p>www.mikobrospersonalblog.wordpress.com</p>
            </div>
        `;
    }
}

customElements.define("contact-component", Contact);
