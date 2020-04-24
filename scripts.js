window.addEventListener("collabsible-content-open", ({ target, details }) => {
  const button = document.querySelector(`[data-collabsible=${target.id}]`);
  button.textContent = details ? "close" : "open";
});

window.addEventListener("click", ({ target: { dataset } }) => {
  if (dataset.collabsible) {
    document.getElementById(dataset.collabsible).toggleAttribute("open");
  }
});
