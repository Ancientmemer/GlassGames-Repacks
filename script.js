// Loader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("app").classList.remove("hidden");
  }, 1200);
});

// One-time torrent notice
if (!localStorage.getItem("torrentNotice")) {
  alert("⚠️ This site uses magnet links. Install uTorrent / BitTorrent to download.");
  localStorage.setItem("torrentNotice", "shown");
}

// Search filter
const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

search.addEventListener("input", () => {
  const q = search.value.toLowerCase();
  cards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    card.style.display = title.includes(q) ? "block" : "none";
  });
});
