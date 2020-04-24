window.addEventListener("collabsible-content-open", ({ target, detail }) => {
  const button = document.querySelector(`[data-collabsible=${target.id}]`);
  button.textContent = detail ? "close" : "open";
});

window.addEventListener("click", ({ target: { dataset } }) => {
  if (dataset.collabsible) {
    document.getElementById(dataset.collabsible).toggleAttribute("open");
  }
});
