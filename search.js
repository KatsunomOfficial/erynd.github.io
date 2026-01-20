const pages = [
  { title: "Main Page", url: "index.html" },
  { title: "Erynd", url: "erynd.html" },
  { title: "Updates", url: "updates.html" },
  { title: "Contributing", url: "contributing.html" },
  { title: "About", url: "about.html" }
];

const input = document.getElementById("searchInput");
const results = document.getElementById("results");

input.addEventListener("input", () => {
  const value = input.value.toLowerCase().trim();
  results.innerHTML = "";

  if (!value) {
    results.style.display = "none";
    return;
  }

  results.style.display = "block";

  const filtered = pages.filter(page => page.title.toLowerCase().includes(value));

  filtered.forEach(page => {
    const item = document.createElement("a");
    item.href = page.url;
    item.textContent = page.title;
    item.className = "result-item";
    results.appendChild(item);
  });
});

const updateDivs = document.querySelectorAll(".update");

updateDivs.forEach(update => {
  update.addEventListener("click", () => {
    const updateId = update.getAttribute("data-update-id");
    window.open(`updates/${updateId}.html`, "_self");
  });
});
