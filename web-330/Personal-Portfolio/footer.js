class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="footer">
                <ul id="footer-bar" style="list-style-type:"none">
                    <li class="nav"><a href="https://github.com/MichaelChristman1999/MichaelChristman1999.github.io">GitHub Repository</a></li>
                    <li class="nav"><a href="https://github.com/buwebdev/web-330">Course GitHub Repository</a></li>
                    <li class="nav"><a href="https://www.youtube.com/@bellevueuniversity/featured">YouTube Channel</a></li>
                    <li class="nav"><a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/">Bellevue University</a></li>
                </ul>
                <p>You can contact me via email at mchristm19@gmail.com</p>
            </div>
        `;
    }
}

customElements.define("footer-component", Footer);
