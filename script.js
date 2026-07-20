const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {
  const filter = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll(".news-card");

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();

    if (text.includes(filter)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
