class Contact extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="contact">
                <h3>mchristm19@gmail.com</h3>
                <h3>011-001-1999</h3>
                <h3>Kenosha, WI</h3>
                <h3>www.mikobrospersonalblog.com</h3>
            </div>
        `;
    }
}

customElements.define("contact-component", contact);
