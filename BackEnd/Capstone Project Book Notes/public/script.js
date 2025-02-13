document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("searchForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      const query = document.getElementById("searchInput").value.trim();
      if (!query) return;

      fetch("/search?query=" + encodeURIComponent(query))
        .then((response) => response.json())
        .then((data) => {
          displayResults(data.books);
        })
        .catch((error) => console.error("Error fetching books:", error));
    });

  function displayResults(books) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; // Clear previous results

    if (books.length === 0) {
      resultsContainer.innerHTML = "<p>No books found.</p>";
      return;
    }

    books.forEach((book) => {
      const bookCard = `
          <div class="col-md-4">
            <div class="card mb-4">
              <img src="${book.cover}" class="card-img-top" alt="Book Cover">
              <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">Author: ${book.author}</p>
              </div>
            </div>
          </div>
        `;
      resultsContainer.innerHTML += bookCard;
    });
  }
});
