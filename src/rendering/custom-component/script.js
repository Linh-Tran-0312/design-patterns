

const items = [];

window.addEventListener("add-item", () => {
  items.push("...");
  window.dispatchEvent(new CustomEvent("added-item", { detail: items }));
});

class BasketInfo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.handleAdded = this.render.bind(this);
    this.render();
  }

  static get observedAttributes() {
    return ["sku"];
  }

  render(sku) {
    const count = items.length;
    console.log(this.getAttribute("sku"));
    this.shadowRoot.innerHTML = `
    <style>
        .empty {
            color: red;
        }
        .filled {
            color: green;
        }
    </style>
<div class="${count === 0 ? "empty" : "filled"}">basket: ${count} item(s)</div>
<div>${sku}</div>
    `;
  }

  connectedCallback() {
    window.addEventListener("added-item", this.handleAdded);
  }

  disconnectedCallback() {
    window.removeEventListener("added-item", this.handleAdded);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "sku" && oldValue !== newValue) {
      this.render(newValue);
    }
  }
}

customElements.define("basket-info", BasketInfo);

const app = document.getElementById("app");
["apple", "banana", "cherry"].forEach((sku, index) => {
    setTimeout(() => {
        app.setAttribute("sku", sku);
    }, index * 1000);
})