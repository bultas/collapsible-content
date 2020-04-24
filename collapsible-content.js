class CollapsibleContent extends HTMLElement {
  constructor() {
    super();

    this.style.display = "block";
    this.style.overflow = "hidden";
    this.style.transitionTimingFunction = "cubic-bezier(0, 1, 0.5, 1)";
  }

  static get observedAttributes() {
    return ["open"];
  }

  get open() {
    return this.hasAttribute("open");
  }

  set open(bool) {
    if (bool === true) {
      this.setAttribute("open", true);
    } else {
      this.removeAttribute("open");
    }
  }

  attributeChangedCallback() {
    this.onChange();
  }

  connectedCallback() {
    this.height = this.firstElementChild.scrollHeight;
    this.onChange();
  }

  onChange() {
    this.setStyles();
    this.sendEvent();
  }

  sendEvent() {
    this.dispatchEvent(
      new CustomEvent("collapsible-content-open", {
        detail: this.open,
        bubbles: true,
      })
    );
  }

  setStyles() {
    if (this.open === true) {
      this.style.transition = "height .4s, opacity .4s .2s";
      this.style.height = `${this.height}px`;
      this.style.opacity = 1;
    }

    if (this.open === false) {
      this.style.transition = "height .4s .2s, opacity .4s";
      this.style.height = 0;
      this.style.opacity = 0;
    }
  }
}

customElements.define("collapsible-content", CollapsibleContent);
