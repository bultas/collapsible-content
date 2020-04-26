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

const addButton = document.getElementById("add-dynamic-content");

addButton.addEventListener("click", () => {
  const p = document.createElement("p");
  p.innerText =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer rutrum, orci vestibulum ullamcorper ultricies, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer rutrum, orci vestibulum ullamcorper ultricies";

  document.getElementById("collapsible-2").appendChild(p);
});
