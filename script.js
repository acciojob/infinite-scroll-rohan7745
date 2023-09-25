document.addEventListener("DOMContentLoaded", function () {
  const infiList = document.getElementById("infi-list");
  let page = 1; // To keep track of the current page
  const itemsPerPage = 10; // Number of items to load per page
  let loading = false; // To prevent multiple simultaneous requests

  // Function to load more items
  function loadMoreItems() {
    if (loading) return; // Prevent multiple simultaneous requests
    loading = true;

    // Simulate an API call to fetch more data (you can replace this with a real API call)
    setTimeout(() => {
      for (let i = 1; i <= itemsPerPage; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = "Item " + (page * itemsPerPage + i);
        infiList.appendChild(listItem);
      }
      page++; // Increment the page number
      loading = false;
    }, 1000); // Simulated delay (replace with actual data fetching)
  }

  // Initial load of items
  loadMoreItems();

  // Load more items when user scrolls to the bottom
  window.addEventListener("scroll", function () {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 200
    ) {
      loadMoreItems();
    }
  });
});
