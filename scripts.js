window.addEventListener("collapsible-content-open", ({ target, detail }) => {
  const button = document.querySelector(`[data-collapsible=${target.id}]`);
  button.textContent = detail ? "close" : "open";
  button.setAttribute("aria-expanded", detail);
});

window.addEventListener("click", ({ target: { dataset } }) => {
  if (dataset.collapsible) {
    document.getElementById(dataset.collapsible).toggleAttribute("open");
  }
});
