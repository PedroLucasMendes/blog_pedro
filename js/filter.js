// Filtro de categorias na página inicial. Só client-side, sem backend:
// cada card tem data-category, e os botões de filtro mostram/escondem.
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".filter-btn");
    var cards = document.querySelectorAll(".post-card");
    var noResults = document.getElementById("no-results");

    if (!buttons.length || !cards.length) return;

    function applyFilter(category) {
      var visibleCount = 0;
      cards.forEach(function (card) {
        var matches = category === "todos" || card.dataset.category === category;
        card.classList.toggle("is-hidden", !matches);
        if (matches) visibleCount++;
      });
      if (noResults) {
        noResults.classList.toggle("visible", visibleCount === 0);
      }
    }

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");
        applyFilter(btn.dataset.filter);
      });
    });
  });
})();
