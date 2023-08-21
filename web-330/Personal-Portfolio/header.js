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
                <details class="dropdown">
            <summary class="dropbtn">DevOps</summary>
            <div class="dropdown-content">
              <a href="web-430/Christman-tech-value-stream.html">Technology Value Stream</a>
              <a href="web-430/Christman-two-pizza-rule.html">Two Pizza Rule</a>
            </div>
          </details>
            </div>
        `;
    }
}

customElements.define("header-component", Header);
