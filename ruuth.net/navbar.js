class MyNavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ul id="main-nav">
        <li><a id="nav-home" href="https://ruuth.xyz/">Home</a></li>
        <li><a id="nav-photos" href="index.html">Photos</a></li>
        <li><a id="nav-skiing" href="skiing.html">Skiing</a></li>
        <li><a id="nav-caves" href="caves.html">Caves</a></li>
        <li><a id="nav-animals" href="animals.html">Wildlife</a></li>
        <li><a id="nav-travels" href="travels.html">Travels</a></li>
        <li><a id="nav-astroimages" href="astroimages.html">Astrophotos</a></li>
        <li><a id="nav-other" href="other.html">Other</a></li>

      </ul>`;
    this.setActiveLink();
  }

  setActiveLink() {
    const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

    // First: exact href match
    let matched = false;
    this.querySelectorAll('#main-nav a').forEach(a => {
      const href = a.getAttribute('href').toLowerCase();
      if (href === page) {
        a.classList.add('active');
        matched = true;
      }
    });

    if (matched) {
      return;
    }

    // Fallback grouping (e.g. travels_xxx.html -> Travels)
    if (page.indexOf('travels') !== -1) {
      this.querySelector('#nav-travels')?.classList.add('active');
    } else if (page.indexOf('animals') !== -1) {
      this.querySelector('#nav-animals')?.classList.add('active');
    } else if (page.indexOf('Messier') !== -1) {
      this.querySelector('#nav-astroimages')?.classList.add('active');
    } else if (page.indexOf('other') !== -1) {
      this.querySelector('#nav-other')?.classList.add('active');
    } else if (page.indexOf('volcanoes') !== -1) {
      this.querySelector('#nav-other')?.classList.add('active');
    } else if (page.indexOf('circus') !== -1) {
      this.querySelector('#nav-other')?.classList.add('active');
    } else if (page.indexOf('climbing') !== -1) {
      this.querySelector('#nav-other')?.classList.add('active');
    } else if (page.indexOf('mountaineering') !== -1) {
      this.querySelector('#nav-other')?.classList.add('active');
    } else if (page.indexOf('skitouring') !== -1) {
      this.querySelector('#nav-other')?.classList.add('active');
    }
  }
}
customElements.define('my-navbar', MyNavBar);
