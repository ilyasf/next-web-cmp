"use client";

class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = `
      /* Add your custom styles here */
      .container {
        display: flex;
        justify-content: space-between;
      }

      .item-list {
        flex: 1;
      }

      .social-list {
        display: flex;
        justify-content: flex-end;
      }
    `;

    const container = document.createElement("div");
    container.classList.add("container");

    // Render the list of items
    const itemList = document.createElement("ul");
    itemList.classList.add("item-list");
    Array.from(this.children).forEach((child) => {
      const listItem = document.createElement("li");
      listItem.textContent = child.textContent;
      itemList.appendChild(listItem);
    });
    container.appendChild(itemList);

    // Render the social list
    const socialList = document.createElement("ul");
    socialList.classList.add("social-list");
    const socialItems = ["Facebook", "Twitter", "Instagram"];
    socialItems.forEach((item) => {
      const socialItem = document.createElement("li");
      socialItem.textContent = item;
      socialList.appendChild(socialItem);
    });
    container.appendChild(socialList);

    shadow.appendChild(style);
    shadow.appendChild(container);
  }
}

export default customElements.define("footer-component", FooterComponent);
