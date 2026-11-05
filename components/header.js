class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const inPagesDirectory = window.location.pathname.includes('/pages/');
    const rootPath = inPagesDirectory ? '../' : '';
    const pagePath = inPagesDirectory ? '' : 'pages/';
    this.innerHTML = `
      <a class="skip-link" href="#main-content">Skip to content</a>
      <header class="site-header">
        <nav class="navbar navbar-expand-xl navbar-dark sticky-top" aria-label="Main navigation">
          <a class="navbar-brand" href="${rootPath}index.html">Mahedi Hasan</a>
          <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse" id="navbarCollapse" style="">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item mr-2">
                <a class="nav-link" href="${rootPath}index.html">Home</a>
              </li>
              <li class="nav-item mr-2">
                <a class="nav-link" href="${pagePath}education.html">Education</a>
              </li>
              <li class="nav-item mr-2">
                <a class="nav-link" href="${pagePath}experience.html">Experience</a>
              </li>
              <li class="nav-item mr-2">
                <a class="nav-link" href="${pagePath}awards.html">Awards</a>
              </li>
              <li class="nav-item mr-2">
                <a class="nav-link" href="${pagePath}skills.html">Skills</a>
              </li>
              <li class="nav-item mr-2">
                <a class="nav-link" href="${pagePath}teaching.html">Teaching</a>
              </li>
              <li class="nav-item mr-2">
                <a class="nav-link" href="${pagePath}projects.html">Projects</a>
              </li>
              <li class="nav-item mr-2">
                <a class="nav-link" href="${pagePath}publications.html">Publications</a>
              </li>
              <li class="nav-item mr-2">
                <a class="nav-link" href="${pagePath}blogposts.html">Notes</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    `;
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    this.querySelectorAll('.nav-link').forEach((link) => {
      const linkPage = link.getAttribute('href').split('/').pop();
      if (linkPage === currentPage) link.setAttribute('aria-current', 'page');
    });
    const markMainContent = () => {
      const mainContent = document.querySelector('main, body > .container, #page-container > .container');
      if (mainContent) {
        mainContent.id = 'main-content';
        mainContent.setAttribute('role', 'main');
        mainContent.setAttribute('tabindex', '-1');
      }
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', markMainContent, { once: true });
    else markMainContent();
  }
}

customElements.define('header-component', Header);
