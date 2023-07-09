class Header extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="banner">
                <h1>Michael Richard Christman's Personal Portfolio</h1>
            </div>
            <div id="navigation-container">
                <ul id="navigation-list">
                    <li class="navigation">
                        <a href="index.html">Home</a>
                    </li>
                    <li class="navigation">
                    <a href="about-page.html">About</a>
                    </li>
                    <li class="navigation">
                    <a href="hobbies-page.html">Hobbies</a>
                    </li>
                    <li class="navigation">
                    <a href="christman-resume.html">Resume</a>
                    </li>
                    <li class="navigation">
                        <a href="projects.html">Projects</a>
                    </li>
                    <li class="navigation">
                        <a href="db-diagrams.html">Database Diagrams</a>
                    </li>
                    <li class="navigation">
                        <a href="api-tests.html">API Unit Tests</a>
                    </li>
                    <li class="navigation">
                        <a href="bucket-list.html">Bucket List</a>
                    </li>
                </ul>
            </div>
        `;
    }
}

customElements.define("header-component", Header);
