class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="footer">                                   
                <a href="https://github.com/MichaelChristman1999/MichaelChristman1999.github.io" target="_blank">My GitHub Repository</a>
                <a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/" target="_blank">Bellevue Web Development Degree</a>
                <a href="https://www.youtube.com/user/bellevueuniversity" target="_blank">Bellevue University YouTube</a>
                <a href="https://github.com/buwebdev/web-330" target="_blank">BUWEB-330 GitHub Repository</a> 
            </div>
        `;
    }
}

customElements.define("footer-component", Footer);
