class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const currentYear = new Date().getFullYear();
    this.innerHTML = `
    <div class="footer-lemos mt-5">

        <div class="py-3 px-md-5 container-fluid">
            <div class="row">
                <div class="col-auto col-md-5 align-middle">
                    <p class="mb-0" style="color: var(--light-gray);">© ${currentYear} MAHEDI HASAN</p>
                    <p class="my-0 pt-0"><a class="" href="mailto:mahedi.cse@iubat.edu">mahedi.cse@iubat.edu</a></p>

                </div>


                <div class="col col-md-7 text-right">
                    <p class="mb-0" style="color: var(--light-gray);">Quick Links</p>
                    <p class="my-0 pt-0">
                        <a href="${window.location.pathname.includes('/pages/') ? '../index.html' : 'index.html'}" aria-label="Home"><i class="mr-3 footer-icons fa-solid fa-house" aria-hidden="true"></i></a>
                        <a href="https://www.linkedin.com/in/mahedi-hasan-034a13376/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="mr-3 fab footer-icons fa-linkedin" aria-hidden="true"></i></a>
                        <a href="https://scholar.google.com/citations?user=bQr8zycAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar"><i class="mr-3 footer-icons fa-brands fa-google-scholar" aria-hidden="true"></i></a>
                        <a href="https://github.com/mahedi-H-hasan" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="footer-icons fa-brands fa-github" aria-hidden="true"></i></a>
                    </p>
                </div>
            </div>
        </div>

    </div>
    `;
  }
}

customElements.define('footer-component', Footer);
