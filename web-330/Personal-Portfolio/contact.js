class Contact extends HTMLElement
{
    constructor() {
        super(); 
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="contact">
                <p style="display:inline">mchristm19@gmail.com</p>&nbsp;&nbsp;
                <p style="display:inline">011-001-1999</p>&nbsp;&nbsp;
                <p style="display:inline">Kenosha, WI</p>&nbsp;&nbsp;
                <p style="display:inline">www.mikobrospersonalblog.wordpress.com</p>
            </div>
        `;
    }
}

customElements.define("contact-component", Contact);
