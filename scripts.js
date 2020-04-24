window.addEventListener("collabsible-content-open", (e) => {
  const content = e.target;
  const button = document.querySelector(`[data-collabsible=${content.id}]`);
  button.textContent = e.target.open ? "close" : "open";
});

window.addEventListener("click", ({ target: { dataset } }) => {
  if (dataset.collabsible) {
    document.getElementById(dataset.collabsible).toggleAttribute("open");
  }
});
