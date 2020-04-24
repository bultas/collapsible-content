class SlideContent extends HTMLElement {
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

  set open(val) {
    if (val === true) {
      this.setAttribute("open", val);
    } else {
      this.removeAttribute("open");
    }
  }

  attributeChangedCallback(name, prevValue, value) {
    this.setStyles();
    this.sendEvent();
  }

  connectedCallback() {
    this.height = this.firstElementChild.scrollHeight;
    this.setStyles();
    this.sendEvent();
  }

  sendEvent() {
    this.dispatchEvent(
      new CustomEvent("collabsible-content-open", {
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

customElements.define("slide-content", SlideContent);
