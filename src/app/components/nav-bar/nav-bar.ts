class TopNavigationBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const items = Array.from(this.children).map((child: Element) => {
      const name = child.getAttribute("data-name");
      const url = child.getAttribute("data-url");
      const icon = child.getAttribute("data-icon");

      return { name, url, icon };
    });

    const menuItems = items
      .map((item) => {
        return `<li><a href="${item.url}"><i class="${item.icon}"></i>${item.name}</a></li>`;
      })
      .join("");

    this.innerHTML = `
      <nav>
        <ul>
          ${menuItems}
        </ul>
        <div class="right-side">
          ${this.innerHTML}
        </div>
      </nav>
    `;
  }
}

customElements.define("top-navigation-bar", TopNavigationBar);
