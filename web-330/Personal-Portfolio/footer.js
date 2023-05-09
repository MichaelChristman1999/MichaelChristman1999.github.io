class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="footer">   
            <ul id="footer-bar">
                <li class="navigation-link"><a href="https://github.com/MichaelChristman1999/MichaelChristman1999.github.io" target="_blank">My GitHub Repository</a></li>
                <li class="navigation-link"><a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/" target="_blank">Bellevue Web Development Degree</a></li>
                <li class="navigation-link"><a href="https://www.youtube.com/user/bellevueuniversity" target="_blank">Bellevue University YouTube</a></li>
                <li class="navigation-link"><a href="https://github.com/buwebdev/web-330" target="_blank">BUWEB-330 GitHub Repository</a></li>
                </ul>
            </div>
        `;
    }
}

customElements.define("footer-component", Footer);
